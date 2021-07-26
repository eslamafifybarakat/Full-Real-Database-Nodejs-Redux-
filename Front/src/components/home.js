import {Link} from 'react-router-dom'
const Home = ()=>{
    return (
      <div>
        <div class="ball">
          <div class="char">
            <div class="inner">
              <div class="button"></div>
            </div>
            <div class="top"></div>
            <div class="head">
              <div class="eye"></div>
              <div class="eye">
                <div class="monicle"></div>
              </div>
            </div>
          </div>
        </div>
        <b>Welcome</b>
        <Link to="/users" activeClassName="active">
          <button className=" btn-white text-black btn-lg btn-outline-info btnExplore">
            Explore
          </button>
        </Link>
      </div>
    );
}
export default Home;