class Explore {
  draw() {
      background(explore, 0,0,width,height);
    }



  keyPressed() {
    switch(key) {
      case 'O':
        buttonSound.play();
        this.sceneManager.showScene(Prompt);
        break;
    }
  }
}