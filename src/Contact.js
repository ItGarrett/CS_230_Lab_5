function Contact() {
    return (
        <div>
            <h1>Contact Us</h1>
            <form>
                <div className="mb-3 mx-5">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John Smith" />
                </div>
                <div className="mb-3 mx-5">
                    <label for="exampleFormControlInput2" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
                </div>
                <div className="mb-3 mx-5">
                    <label for="exampleFormControlInput3" className="form-label">Phone number</label>
                    <input type="phone" className="form-control" id="exampleFormControlInput3" placeholder="###-###-####" />
                </div>
                <div className="mb-3 mx-5">
                    <label for="exampleFormControlTextarea4" className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea4" rows="3" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Contact