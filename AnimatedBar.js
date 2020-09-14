import React, { Component } from 'react';
import { Animated , Text} from 'react-native';


let animation;

export default class AnimatedBar extends Component {

  constructor(props) {
    super(props);

    //console.log('###')
    //console.log(props);
    if (this.props.barName === 'graybar') {
      //  console.log('asdfasd');
        this.props.color = '#000000' 
    }
    //console.log(props);

    //console.log("CONSTRUCT")
    this.updateValue();
  }
  updateValue = () => {
    animation = new Animated.Value(200)

    // console.log('###')
    // console.log('animation')
    // console.log(animation)
    // console.log('value')
    // console.log(this.props.value);
     Animated.sequence([
      Animated.delay(1000),
      Animated.timing(animation, {
        toValue: this.props.value,
                    duration: 200,
                    useNativeDriver: true,
                }
            )
        ]).start()
        
    }

    componentDidUpdate = (prevProps, prevState, snapshot)=>{
        if(prevProps!=this.props){
            this.updateValue()
        }
        
    }
    componentDidMount = ()=>{
        

    }

    render() {
        return (
            <Animated.View
               key={"bar-"+Math.random()*100}
                style={{
                    flex:1,
                    overflowX:'visible',
                    backgroundColor: this.props.barName === 'graybar' && (this.props.index == 0 || this.props.index == 8) ? '#000' : (this.props.barName === 'yellowbar' &&  this.props.index == 8 ? '#fec30a' :  this.props.color),
                    marginLeft:this.props.margin+'%',
                    marginRight:this.props.margin+'%',
                    height:'100%',
                    borderRadius:25,
                    alignItems:'center',
                    transform: [
                        { translateY:animation},
                    ], 
                }}
            >
                {/* <Text style={{position:'absolute',width:45,top:-22,fontWeight:'700',color:'grey', fontSize:16 }} >{this.props.label}</Text> */}
            </Animated.View>
        )
    }
}