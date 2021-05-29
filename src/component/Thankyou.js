import React from "react";
import {Card,Button} from "antd";
import { withRouter } from "react-router";

class Thankyou extends React.Component {

    render()
    {
        return (<> 
        
        <div>
            {/* {this.props.projectDetails.backed=this.props.projectDetails.backed+this.props.location.pathname} */}

        <Card>
                        <div className = "">
                            <div className = "title">
                            Thanks for your support!
                            </div>
                            <div className = "subtitle">  
                            Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                            an email once our campaign is completed.
                             Got it!
                            </div>
                            {console.log(this.props)}
                            <Button className="ant-btn-sucess"
                             type="primary" onClick={this.props.handlethankok}>GOT IT! </Button>
                        </div>
                        </Card>
        </div>
        
        
        
        </>);
    };
}
export default withRouter(Thankyou);