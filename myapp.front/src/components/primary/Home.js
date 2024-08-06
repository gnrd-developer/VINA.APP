import PrincipalCard from "../secundary/PrincipalCard";
import "./home.css";

function Home() {
    return (
        <div className="container-fluid">
            <section>
                <div className="row">
                    <div className="col-md-6">
                        <PrincipalCard />
                    </div>

                    <div className="col-md-6">
                        <PrincipalCard />
                    </div>                    
                </div>    
            </section>

            <section>
                <div className="row">
                    <div className="col-md-6">
                        <PrincipalCard />
                    </div>

                    <div className="col-md-6">
                        <PrincipalCard />
                    </div>                    
                </div>    
            </section>
            
            <section>
                <div className="row">
                    <div className="col-md-6">
                        <PrincipalCard />
                    </div>

                    <div className="col-md-6">
                        <PrincipalCard />
                    </div>                    
                </div>    
            </section>                                                 
        </div>
    )
} export default Home