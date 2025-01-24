import '../css/blog.css';
import { useSlideUp } from "../assets/customhooks/slideup"

export default function Blog({ posts, origin }) {
    const { ref, className } = useSlideUp();

    let data = null;
    if (origin == 'home') {
        data = [posts[0]];
    }
    else {
        data = posts;
    }
    return (
        <section ref={ref} className={`blog container section slide_up ${className}`} id="blog">
            <h1>My Blog</h1>
            <div className="blog__div">
                <div>
                    {
                        data.map((blog, i) => {
                            return <div key={i} className='blog__div_parent'
                                onClick={() => window.open("www.google.com", "__blank")}
                                style={{ cursor: 'pointer' }}>
                                <h4>{blog[1]}</h4>
                                <div className='blog__div_imgDiv'><img src={blog[3]} alt={`blog thumbnail`} /></div>
                            </div>
                        })
                    }
                </div>
                <div>
                    <button className='blog__know_more'>Click for more</button>
                </div>
            </div>
        </section>

    )
}
