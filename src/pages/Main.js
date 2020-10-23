import React, {useContext, useEffect} from "react";
import defcity from "../assets/images/salzburg.jpg"
import {NavLink} from "react-router-dom";
import {AppContext} from "../context/appContext";


export const Main = () => {

    const {currentPosition,getPosition} = useContext(AppContext)

    useEffect(() => {
        getPosition()
    }, [])

    return (
        <div className="container">
            <div className="col s12">
                <h1>Hello</h1>
                <p>Your location is { Number(currentPosition.lat).toFixed(2)} {Number(currentPosition.lng).toFixed(2) } </p>
                <div className="card-panel hoverable">
                    <div className="card-image">
                        <img className="responsive-img" src={defcity} alt=""/>
                        <span className="card-title">Your location: IriskoGrad</span>
                    </div>
                    <div className="card-content">
                        <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum dolorem eos in quisquam quos ratione sunt temporibus? Ab assumenda cum iste molestiae mollitia? Aliquid assumenda laborum nesciunt sit vero?</span><span>Aliquam asperiores aut beatae consectetur cum cumque deleniti deserunt dicta eaque error, esse ex fugit inventore, ipsam minima mollitia nulla porro quaerat quasi quisquam reprehenderit, similique sunt veritatis vero voluptas.</span><span>Ab at beatae culpa dolor eaque, et ipsam magnam molestiae nam perspiciatis qui recusandae sapiente similique sit ut? Aut autem dolorem, eum minima nam obcaecati perspiciatis quo quod ullam veritatis.</span>
                        </p>
                    </div>
                    <div className="card-action">
                        <NavLink to="#">This is a link</NavLink>
                    </div>

                </div>
            </div>
        </div>
    )
}