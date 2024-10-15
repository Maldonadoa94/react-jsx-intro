const App = () => {
    return (
        <div>
            <Tweet 
              name="Anthony Maldonado"
              username="Maldonadoa"
              date={new Date().toDateString()}
              message="This app will disrupt everything!"
            />
            <Tweet 
              name="Daniel Radcliff"
              username="Harry Potter"
              date={new Date().toDateString()}
              message="Please retweet this!"
            />
            <Tweet 
              name="John Cena"
              username="CenaJ"
              date={new Date().toDateString()}
              message="YOU CANT SEE ME!"
            />
        </div>
    );
}