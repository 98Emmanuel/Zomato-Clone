import React from 'react';
import './Style/frontPage.css';
import Banner from './Banner';
import QuickSearch from './QuickSearch';
import axios from 'axios';

class Homepage extends React.Component{
    //Mount an API
    constructor(){
        super();
        this.state = {
            loc : [],
            mealty : []
        }
    }
    componentDidMount(){
        //location API
        axios({
            url : 'http://localhost:5500/location',
            method : 'get',
            headers : {'Content-Type' : 'application/JSON'}
        })

    .then(res => {
        this.setState({ loc : res.data.location })  //State declared before DidMount
    })

    .catch(err => {console.log(err)})
     

           axios({
            url : 'http://localhost:5500/mealtype',
            method : 'get',
            headers : {'Content-Type': 'application/JSON'}
        })

        .then(res => {
            this.setState({ mealty : res.data.mealtype }) // updating
        })

        .catch(err => {console.log(err)});
    } 


        render(){

            const { loc, mealty } = this.state; // fetching

            //console.log(mealty);
            //console.log(loc);

        return(
            <div>
                <Banner locationData = {loc} />  {/*Transfering the location data to the child - Banner*/}

                <QuickSearch mealtypeData ={ mealty } /> {/*Transfering the mealtype data to the child - quicksearch*/}

            </div>
        )
    }
}

export default Homepage;