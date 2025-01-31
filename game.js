class ToothRocketGame {
  constructor() {
    this.score = 0;
    this.fuel = 100;
    this.maxScore = 150;  
    this.initializeElements();
  }

  initializeElements() {
    this.launchBtn = document.getElementById('launch-btn');
    this.scoreDisplay = document.getElementById('score');
    this.fuelDisplay = document.getElementById('fuel');
    this.rocketElement = document.getElementById('tooth-rocket');
    this.gameStatus = document.getElementById('game-status');
    this.gameResult = document.getElementById('game-result');

    if (this.launchBtn && this.scoreDisplay && this.rocketElement) {
      this.setupEventListeners();
    }
  }

  setupEventListeners() {
    this.launchBtn.addEventListener('click', () => this.launchRocket());
  }

  launchRocket() {
    if (this.fuel <= 0) {
      this.endGame(false, 'Research Funding Depleted');
      return;
    }

    const scoreGain = Math.floor(Math.random() * 20) + 10;
    const fuelConsumption = Math.floor(Math.random() * 25) + 15;

    this.score += scoreGain;
    this.fuel -= fuelConsumption;

    this.scoreDisplay.textContent = this.score;
    this.fuelDisplay.textContent = Math.max(0, this.fuel);

    this.animateRocket();

    if (this.score >= this.maxScore) {
      this.endGame(true, 'Breakthrough Research Achieved!');
    } else if (this.fuel <= 0) {
      this.endGame(false, 'Research Funding Depleted');
    }
  }

  animateRocket() {
    this.rocketElement.style.transform = 'translateY(-200%)';
    this.gameStatus.textContent = 'Launching Research Rocket...';
    
    setTimeout(() => {
      this.rocketElement.style.transform = 'translateY(0)';
      this.gameStatus.textContent = 'Research Ready for Next Launch!';
    }, 1500);
  }

  endGame(won, message) {
    this.launchBtn.disabled = true;
    this.gameResult.classList.remove('hidden');
    this.gameResult.classList.add(won ? 'win' : 'lose');
    
    this.gameResult.textContent = won 
      ? `${message} 🚀 Dental Science Advances!` 
      : `${message} 📊 Research Stalled`;
    
    this.gameStatus.textContent = won 
      ? 'Congratulations on Your Scientific Breakthrough!' 
      : 'Research Funding Challenges Encountered';
  }

  resetGame() {
    this.score = 0;
    this.fuel = 100;
    this.scoreDisplay.textContent = this.score;
    this.fuelDisplay.textContent = this.fuel;
    this.launchBtn.disabled = false;
    this.gameResult.classList.add('hidden');
    this.gameStatus.textContent = 'Prepare for Research Launch!';
  }
}

const game = new ToothRocketGame();
