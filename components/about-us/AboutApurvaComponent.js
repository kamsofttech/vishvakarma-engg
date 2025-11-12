import React from 'react'

function AboutApurvaComponent() {
    const lazyRoot = React.useRef(null)
    const [id, setId] = React.useState('bu-3')
    function onMouseOverHandle(id) {
        setId(id)
    }
    return (
        <div>
            <div className="section-full b_nature bg-white why-us wow fadeIn">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="nob_left_box">
                                <div className="head-block">
                                    <h4 className="w-title">Innovation</h4>
                                    <p className="w-title1">Facilitates Ports, Shipping and Waterways</p>
                                </div></div></div>
                        <div className="col-md-9">
                            <div className="nob_box">
                                <div className="acco-container" ref={lazyRoot}>
                                    <ul className="accordion-group">
                                        <li className={`lazy bu-1 ${id == 'bu-1' ? 'out' : ''} `} onMouseOver={() => onMouseOverHandle('bu-1')}>
                                            <img src="/images/innovation/ourexperise.jpg" alt="" />
                                            <div className="accordion-overlay"></div>
                                            <h3>Our Expertise<i className="fa fa-long-arrow-right" aria-hidden="true"></i></h3>
                                            <section><article>
                                                <h4>Our Expertise</h4>
                                                <p>With years of hands-on experience in the field, we specialize in meeting the diverse needs of marine and industrial machinery. From main engines and auxiliary engines to turbochargers, pumps, and more, we possess the knowledge and resources to address a wide array of equipment requirements. Our services extend to installation, repair, and maintenance, ensuring optimal performance and longevity of your valuable assets.</p></article>
                                            </section></li>
                                        <li className={`lazy bu-2 ${id == 'bu-2' ? 'out' : ''} `} onMouseOver={() => onMouseOverHandle('bu-2')}>
                                            <img src="/images/innovation/quality.jpg" alt="" /><div className="accordion-overlay"></div>
                                            <h3>Quality Infrastructure <i className="fa fa-long-arrow-right" aria-hidden="true"></i></h3><section>
                                                <article><h4>Quality Infrastructure</h4>
                                                <p>Equipped with state-of-the-art facilities in the Sancoale Industrial Estate Goa and Mumbai, our workshop features cutting-edge machinery and advanced welding facilities. This allows us to execute our services with precision and efficiency, minimizing downtime and maximizing productivity for our clients. Our team of skilled engineers and technicians is dedicated to providing swift and effective solutions, backed by years of experience and expertise.</p></article>
                                            </section></li>
                                        <li className={`lazy bu-3 ${id == 'bu-3' ? 'out' : ''} `} onMouseOver={() => onMouseOverHandle('bu-3')}>
                                            <img src="/images/innovation/excellence.jpg" alt="" />
                                            <div className="accordion-overlay"></div>
                                            <h3>Commitment to Excellence <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                            </h3>
                                            <section><article>
                                                <h4>Commitment to Excellence</h4>
                                                <p>At Apurva Engineering, quality is at the forefront of everything we do. We are committed to delivering superior service that exceeds expectations, adhering to the highest standards of professionalism and integrity. Whether it's routine maintenance, complex repairs, or emergency assistance, our team is ready to go above and beyond to ensure your satisfaction
.</p></article>
                                            </section></li>
                                        <li className={`lazy bu-4 ${id == 'bu-4' ? 'out' : ''} `} onMouseOver={() => onMouseOverHandle('bu-4')}>
                                            <img src="/images/innovation/clients.jpg" alt="" />
                                            <div className="accordion-overlay"></div>
                                            <h3>Client-Centric Approach <i className="fa fa-long-arrow-right" aria-hidden="true"
                                            ></i></h3><section><article>
                                                <h4>Client-Centric Approach</h4>
                                                <p>We understand that every client is unique, which is why we take a personalized approach to every project. Our team works closely with you to understand your specific requirements and tailor our services accordingly. We believe in fostering long-term partnerships built on trust, transparency, and mutual respect.</p></article>
                                            </section></li></ul></div></div></div></div></div></div>
        </div>
    )
}

export default AboutApurvaComponent
