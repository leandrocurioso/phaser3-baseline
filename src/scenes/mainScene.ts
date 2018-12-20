export class MainScene extends Phaser.Scene {
  private phaserSprite: Phaser.GameObjects.Sprite;

  constructor() {
    super({
      key: "MainScene"
    });
  }

  preload(): void {
    this.load.image("player", "./assets/image/player.png");
  }

  create(): void {
    this.phaserSprite = this.add.sprite(0, 0, "player");
    this.phaserSprite .setOrigin(0, 0);
  }
}
