import React from "react";
import { withRouter } from "react-router-dom";
import {Card,Col,Radio,Input,Button,Modal} from "antd";
import Thankyou from "./Thankyou";
class AfterClick extends React.Component {

  constructor(props) {
		super(props);
		this.state = {
			selectedPledgeIndex: 0,
			select: false,
      value:0,
      thankok:false,
		};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        console.log("isclicked",this.props);
        this.setState({
          select: false,
          thankok:true,
        });

        
        //this.props.onContinue(this.state.value);
        return (<>{(<Thankyou />)}</>);
      }
    
      onchange=(e)=>{
        console.log('radio checked', e.target.value);
        this.setState({id_states:e.target.value});
      };

      handlethankok = ()=>{
        console.log("handlethankok");
        this.setState({thankok:false});
        this.props.onContinue(this.state.value);
      }
   
      handlethankCancel=()=>{
        this.setState({thankok:false});
      }
    render() {
        return (
                <>
                    <Card>
                    <Col xs={24} xl={24}>
                        <div className="title">{"Back this project"}</div>
                        <div className="content">{"Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?"}</div>
                        <Radio.Group  onChange={this.onchange} value={this.state.id_states}>
                        <div className="pledge-container">
                        <div className="pledge-title">
                            <div style={{fontSize: "20px",fontWeight: "500",}}>
                                <Radio value={1}>{"Pledge with no reward"}</Radio>
                            </div>
                             <div className="pledge-content">{`Choose to support us without a reward if you simply believe in our project. As a backer, 
                                you will be signed up to receive product updates via email.`}</div>
                        </div>
                        </div>
                        <div className="pledge-container">
                        <div className="pledge-title">
                        <div style={{fontSize: "20px",fontWeight: "500",}}>
                            <Radio value={2}>{this.props.infos[0].title}</Radio>
                        </div>
                            <div style={{ color: "hsl(176, 50%, 50%)",fontSize: "16px",fontWeight: "200",cursor: "pointer",}}>{this.props.infos[0].pledge}</div>
                      
                        <div className="pledge-content">{this.props.infos[0].content}</div>
                             <div style={{ fontSize: "20px",fontWeight: "500",}}>{this.props.infos[0].left}
                             <span style={{ color: "darkgray", paddingLeft: "5px",fontSize: "12px"}}>left</span>
                             </div>
                             <div>{ this.state.id_states === 2 ? ( <div>{"Enter your pledge"}<form onSubmit={this.handleSubmit}><Input prefix={'$'} value={this.state.value} onChange={this.handleChange} />
                             <Button shape="round" type="primary" style={{ background: "hsl(176, 50%, 60%)", border:"hsl(176, 50%, 47%)", borderRadius: "2em", color:"white",
                              padding: "0.50em 1em",width: "100%",height: "3em",fontSize: "0.90em",cursor: "pointer"}} hoverable = {true} htmlType="submit" >Continue</Button></form>
                             </div>) : ( <div></div>)
                                 }
                             </div>
                        </div>
                        </div>
                        <div className="pledge-container">
                        <div className="pledge-title">
                            <div style={{fontSize: "20px",fontWeight: "500",}}>
                            <Radio value={3}>{this.props.infos[1].title}</Radio></div>
                            <div style={{ color: "hsl(176, 50%, 50%)",fontSize: "16px",fontWeight: "200",cursor: "pointer",}}>{this.props.infos[1].pledge}</div>
                             <div className="pledge-content">{this.props.infos[1].content}</div>
                             <div style={{ fontSize: "20px",fontWeight: "500",}}>{this.props.infos[1].left}
                             <span style={{ color: "darkgray", paddingLeft: "5px",fontSize: "12px"}}>left</span>
                            </div>
                            <div>{ this.state.id_states === 3 ? ( <div>{"Enter your pledge"}<form onSubmit={this.handleSubmit}><Input prefix={'$'} value={this.state.value} onChange={this.handleChange} />
                             <Button shape="round" type="primary" style={{ background: "hsl(176, 50%, 60%)", border:"hsl(176, 50%, 47%)", borderRadius: "2em", color:"white",
                              padding: "0.50em 1em",width: "100%",height: "3em",fontSize: "0.90em",cursor: "pointer"}} hoverable = {true} htmlType="submit" >Continue</Button></form>
                             </div>) : ( <div></div>)
                                 }
                             </div>
                        </div>
                        </div>
                        <div className="pledge-container">
                        <div className="pledge-title">
                            <div style={{fontSize: "20px",fontWeight: "500",}}>
                            <Radio value={4} disabled>{this.props.infos[2].title}</Radio></div>
                            <div style={{ color: "hsl(176, 50%, 50%)",fontSize: "16px",fontWeight: "200",cursor: "pointer",}}>{this.props.infos[2].pledge}</div>
                             <div className="pledge-content">{this.props.infos[2].content}</div>
                             <div style={{ fontSize: "20px",fontWeight: "500",}}>{this.props.infos[2].left}
                             <span style={{ color: "darkgray", paddingLeft: "5px",fontSize: "12px"}}>left</span>
                            </div>
                        </div>
                        </div>
                        </Radio.Group>
                    </Col>
                    </Card>
                    <Modal visible={this.state.thankok} centered={true} footer={null} width={750} onCancel={this.handlethankCancel}>
                    <Thankyou handlethankok={this.handlethankok}/>
                    </Modal>
                </>
        )
    }
}
export default withRouter(AfterClick);