import React, {Component}from 'react'
import './DemoPage.css'
import meal from '../../pictures/mealplans.PNG'

export default class DemoPage extends Component{
    
    state={
        tour: true,
        tabId:1,
    }
    
    renderAccountInfo=()=>{
        return(
            <div className='demo_accounts'>
                <h2>Demo accounts:</h2>
                <div>
                    <h3>Regular user:</h3>
                    <p><strong>Username:</strong><span> chris123@yahoo.com</span></p>
                    <p><strong>Password: </strong><span>aaAA11!! </span><br/></p>
                </div>
                <div>
                    <h3>Forgot username</h3>
                    <p><strong>Full-Name:</strong><span>Chris</span></p>
                    <p><strong>Age:</strong><span>18</span></p>
                </div>
            </div>
        )
    }

    setTab1 = () =>this.setState({tabId:1})
    setTab2 = () =>this.setState({tabId:2})
    
    displayTour = ()=>this.setState({tour: true})
    hideTour = ()=>this.setState({tour:false})

    render(){
        const accounts= this.renderAccountInfo()
        const {tour,tabId}= this.state
        return (
            <div className='demo'>
                <nav>
                    <span className={this.state.tour?'highlight':''} onClick={this.displayTour}>Tour</span> 
                    <span className={!this.state.tour?'highlight':''} onClick={this.hideTour}>Demo</span>
                </nav>
                {!tour && accounts }
                {this.state.tour && 
                <div>
                    <div className='tour_nav'>
                        <span className={tabId===1?'active':''} onClick={this.setTab1}>Visitor</span>
                        <span className={tabId===2?'active':''} onClick={this.setTab2}>User</span>
                    </div>
                    
                    {tabId===1 &&
                    <div className='tour_content'>
                        <h2>Visitor</h2>
                        <div className='app_features'>
                            <div className='text' id='visitor'>
                            Welcome to <strong>myCalories</strong>. As a visitor, you will have access to a variety of healthy recipes and workout plans. To learn more about user features, please click on the User tab above.
                            </div>
                            <div className='featureImg'>
                                <img src={meal} alt='meal plans'/>
                                <img src={'/assets/workoutplans.PNG'} alt='workout plans'/>
                            </div>
                        </div>
                        
                    </div>}

                    {tabId===2 &&
                    <div className='tour_content'>
                        <h2>Registerd User:</h2>
                        <div className='app_features'>
                            <ul className='text'>
                                <li><strong>Calorie Tracking:</strong><span>Monthly,weekly,daily</span></li>
                                <li><strong>Meals tracking:</strong><span>Breakfast,lunch,dinner</span></li>
                                <li><strong>Data protection:</strong><span>Bcrypt and JWT</span></li>
                                <li><strong>Account help:</strong><span>Username recovery/password reset</span></li>
                            </ul>
                            <div className='featureImg'>
                                <img src={'/assets/calorietracking.PNG'} alt='Calorie Tracking'/>
                            </div>
                        </div>
                    </div>}
                </div>}
            </div>
        )
    }
}