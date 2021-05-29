import React from "react";
import {Card} from "antd";
import { withRouter } from "react-router";
import './Home.css';
import ButtonC from './ButtonC';
import ProgressC from './ProgressC';
import ParentCards from "./ParentCard";
class Home extends React.Component
{
    constructor(props) {
        super(props);
        this.projectDetails = {
          backed: 89914,
          total_backers: 5007,
          days_left: 56,
        };
        this.state = {
          setVisible: false,
          visible: false,
          projectDetails: this.projectDetails,
        };
      }
     
	showModal = () => {
		this.setState({
			visible: true,
		});
		console.log('showModal', this.state.visible);
	};

    handleCancel = () => {this.setState({ visible: false });};

      onContinue = (info) => {
		console.log(info);

		if (info) {
			let project_Details = this.projectDetails;
			project_Details.backed = project_Details.backed + parseInt(info);
			project_Details.total_backers = project_Details.total_backers + 1;
			console.log('Project_Details', project_Details);

			this.setState({
				visible: false,
				projectDetails: project_Details,
			});

			console.log(this.state.projectDetails);
			//return <Thankyou projectDetails={this.state.projectDetails} />;
		}
	};
    navgthanks =()=>{
        return this.props.history.push("/Thankyou");
    } 
    render(){
        return (
            <>
                <div className = "home-bookmark">
                    <img className = "mastercraft-icon" src="logo-mastercraft.svg" alt="mastercraft-icon" />
                    <Card>
                        <div className = "bookmark-container">
                            <div className = "title">
                                Mastercraft Bamboo Monitor Riser 
                            </div>
                            <div className = "subtitle">  
                                A beautiful & handcrafted monitor stand to reduce neck and eye strain. 
                            </div>
                        </div>
                        <div className = "bookmark">
                        <div>
                            <ButtonC name = {"Back this project"} disabled = {false}/>
                        </div>
                        <div>
                            <img className = "bookmark-icon" src="icon-bookmark.svg" alt="Bookmark-icon" />
                            <div className = "bookmark-title"> Bookmark </div>
                        </div>
                    </div>
                    </Card>
                </div>
                    <ProgressC projectDetails = {this.projectDetails}/>
                    <ParentCards visible={this.state.visible}
							showModal={this.showModal}
							onContinue={this.onContinue} 
                            handleCancel={this.handleCancel}/>
            </>
        )

    }
}
export default withRouter(Home);