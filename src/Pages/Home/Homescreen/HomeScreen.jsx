const HomeScreen = () => {

  return (
    <section className="homescreen--container">
      <h1 className="homescreen--h1">WELCOME TO MY APPS</h1>
      <div className="homescreen--container--card">
        <div>
          Budget Tracker
        </div>
        <div>
         TicTacToe
        </div>
      </div>
      <div className="homescreen--container--2">
        <div className="homescreen--container--description">
          <div className="homescreen--grid">
            <h2>Budget-Tracker</h2>
            <p>Welcome to the all-in-one budget management solution! Our user-friendly app is your personal financial assistant, dedicated to effortlessly tracking your income and expenses. Easily record your balance and monitor every dollar coming in and going out. With an intuitive interface and seamless design, staying on top of your financial health has never been easier. Take charge of your money, understand your spending habits, and work towards your financial goals with confidence. Simplify your budgeting experience with our efficient app and pave the way to a more secure financial future.</p>
          </div>
          <div className="homescreen--grid">
            <h2>Tic-Tac-Toe</h2>
            <p>Join in for a round of Tic Tac Toe fun! Gather a friend and challenge each other in this classic game of Xs and Os. Enjoy the simple pleasure of strategic gameplay as you take turns marking your spots on the grid. With an easy-to-use interface and straightforward rules, our two-player Tic Tac Toe game offers an engaging way to spend time with friends or family. Unleash your competitive spirit and see who can claim victory in this ultimate battle of wits. Get ready to experience the joy of this timeless game with your favorite opponent!</p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
 
export default HomeScreen;