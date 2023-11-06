function Card() {
    return (
        <div>
            <h1>Card components</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4  mx-5">
                <div className="col">
                    <div className="card h-100 text-bg-primary">
                    <div class="card-header">
                    <h5 className="card-title">Card 01</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text">This is some example text to make up the body of the card.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-bg-danger"> 
                    <div class="card-header">
                    <h5 className="card-title">Card 02</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text">This is some example text to make up the body of the card.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-bg-success">
                    <div class="card-header">
                    <h5 className="card-title">Card 03</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text">This is some example text to make up the body of the card.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;