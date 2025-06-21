export type EnemyReward = {
  exp: number;
  gold: number;
};

export class Enemy {
  /** Enemy's name */
  name: string;

  /** Hit Points */
  hp: number;

  /** Max Hit Points */
  maxHp: number;

  /** Damage output */
  dmg: number;

  /** Evasion chance (%) */
  eva: number;

  /** Critical hit chance (%) */
  ctr: number;

  /** Experience points granted when defeated */
  expGiven: number;

  /** Gold granted when defeated */
  goldGiven: number;

  /** Enemy's level */
  level: number;

  /** Avatar's path */
  avatar: string;

  constructor(
    name: string,
    options: {
      maxHp: number;
      dmg: number;
      eva: number;
      ctr: number;
      expGiven: number;
      goldGiven: number;
      level: number;
      avatar: string;
    }
  ) {
    this.name = name;
    this.maxHp = options.maxHp;
    this.hp = options.maxHp;
    this.dmg = options.dmg;
    this.eva = options.eva;
    this.ctr = options.ctr;
    this.expGiven = options.expGiven;
    this.goldGiven = options.goldGiven;
    this.level = options.level;
    this.avatar = options.avatar;
  }

  /** Returns true if the enemy is still alive */
  isAlive(): boolean {
    return this.hp > 0;
  }

  /** Apply damage to the enemy */
  takeDamage(amount: number): void {
    this.hp = Math.max(0, this.hp - amount);
  }

  /** Returns the reward after defeat (for now: only experience) */
  getReward(): EnemyReward {
    return { exp: this.expGiven, gold: this.goldGiven };
  }
}
