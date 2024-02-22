import React, {Fragment} from "react";

const Card = ({name, email, id}) => {
    return (
        <Fragment>

            <div className='tc bg-lightest-blue dib br3 pa3 ma3 grow bw2 shadow-5'>
                <img alt='robots' src={`https://robohash.org/${id + 100}?200x200`}/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </Fragment>
    );
}

export default Card;