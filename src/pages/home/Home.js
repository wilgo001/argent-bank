import { Feature } from "../../components";


const Home = (props) => {
    const featureIndexList = [0, 1, 2]
    return(
        <main>
            <div className="hero" >
                <section className="hero-content" >
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle" >No fees.</p>
                    <p className="subtitle" >No minimum deposit.</p>
                    <p className="subtitle" >High interest rates.</p>
                    <p className="text" >Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {featureIndexList.map((feature) => <Feature index={feature} key={feature.toString()}/>)}
            </section>
        </main>
    )
}

export default Home;