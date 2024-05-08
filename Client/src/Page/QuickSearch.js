import React from 'react';
// import './Style/frontPage.css'; - Will inherit from parent
//import Banner from './Banner';
import navHook from './nav';


class QuickSearch extends React.Component{
   
    showFilter = (ss) => {
        this.props.navigate(`/filter?mealtype=${ss}`);
    } 

    render(){
        const { mealtypeData } = this.props;
       // console.log(mealtypeData)

        return(
            <div>
        
{/*<!--Quick Searches Part (lower)-->*/}

<div class="container mt-5 mb-5">
    <div class="row">
        <div>
            <h3 class="heading">Quick Searches</h3>
            <p class="subheading">Discover restaurants by type of meal</p>
        </div>
    </div>

    {/*<!--First Line-->*/}
    <div class="d-flex flex-wrap">

        {/*<!--Items-->*/}

        {
            mealtypeData?.map((i, index) => { //i is to represent each of allthe objects that will be passed here
                return(
                    <div key={index} class="d-flex box mt-4" style={{border: "1px solid greenyellow;"}} onClick={() => this.showFilter(i._id)}>
            <div class="l-box">
                <img src={`./images/${i.image}`} alt={i.name} class="img-fluid img-qs" />
            </div>
            <div class="r-box">
                <h4 class="card-title">{i.name}</h4>
                <p class="card-content">{i.content}</p>
            </div>
        </div>
                )
            })
        }
        
        
       
    </div>
</div>


            </div>
        )
    }
}

export default navHook(QuickSearch);