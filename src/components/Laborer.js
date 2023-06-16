import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { displayLaborers } from '../redux/actions/laborers';

const Laborer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayLaborers());
  },
  [dispatch]);

  const laborers = useSelector((state) => state.laborers);
  const { id } = useParams();

  const filteredLaborers = laborers.filter((laborer) => laborer.id == id);


  return (
    <div className="">
      <div className="d-flex mt-7 mx-5 flex-column align-items-center">
        {filteredLaborers.map((item) => (
          <div className="d-flex flex-column flex-lg-row flex-sm-column container my-5 mx-3" height="100vh" key={item.id + 1}>
          {/* <div className='row'> */}
          <div className="col my-5 mx-5">
              <img className="rounded-5" src={item.image_url} width="600" height="400" alt="laborer-img" />
            </div>
            <div className="col d-flex flex-column justify-content-around align-items-lg-end my-3 mx-5">
              <h3 className="text-secondary">
                {' '}
                {item.name}
              </h3>
              <p className="text-secondary">
                {' '}
                {item.description}
              </p>

              <table class="table table-striped table-hover">
                <tbody>
                <tr style={{right:'0px'}}>
                  <th scope="row">Skill</th>
                  <td>{item.skill}</td>
                </tr>
                <tr>
                  <th scope="row">Country</th>
                  <td>{item.country}</td>
                </tr>
                <tr>
                  <th scope="row">City</th>
                  <td>{item.city}</td>
                </tr>
                </tbody>
              </table>
              <h2 className="text-secondary">
                Price:
                {' '}
                $
                {item.price}
              </h2>
            </div>
          {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Laborer;