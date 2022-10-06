import Footer from "./Footer";
import Topbar from "./Topbar";

export default function Template({children}){
    return <div>
        <section className="main-content">
        <Topbar />
        {children}
        </section>
        <Footer />
    </div>
}