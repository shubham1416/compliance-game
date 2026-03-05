/* ─────────────────────────────────────────────────────────
   Compliance Quest — OfficeScene  (Phaser 3)
   Premium interactive game with isometric characters,
   collision zones, depth sorting & corridor navigation
   ───────────────────────────────────────────────────────── */

const SCENARIOS = {
  cyber: [
    {
      id: 's1',
      title: 'The Intern Contact Request',
      story: 'Arjun mentioned that a new intern, Isha, had joined today, and Meera recalled HR introducing her earlier. Suddenly, Arjun started asking around for her personal number, claiming it was for a hackathon team. Meera grew skeptical, reminding him that he had said the exact same thing about the last intern and followed her on social media minutes later. Now, Arjun is pushing to get a copy of the full employee contact list, insisting it is just internal information and no big deal.',
      question: 'What is your decision?',
      options: ['Share access (Hackathon is important)', 'Decline politely (Privacy is key)', 'Suggest the proper HR request process'],
      correct_index: 2,
      level: 1
    },
    {
      id: 's2',
      title: 'The Suspicious USB',
      story: 'While walking in from the parking lot, Kabir held up a shiny USB drive he found on the ground. To your surprise, it had a sticker on it labeled "Salary Revision 2026." Kabir looked curious and mentioned that it could be their lucky day. He immediately headed toward his workstation, wondering aloud if they should just take a quick peek at what is inside.',
      question: 'Plug it in or something else?',
      options: ['Plug it in (Curiosity wins)', 'Report it to IT Security', 'Hand it over to Kabir'],
      correct_index: 1,
      level: 1
    },
    {
      id: 's3',
      title: 'The Free Coffee WiFi',
      story: 'Isha was excited about the super fast WiFi at the neighborhood café, but when you checked the network name, it was "FreeCoffee_FreeInternet_NoPassword." Suddenly, a Slack notification popped up on her screen: a security alert indicating a suspicious login attempt from an unknown location. Isha looked confused and asked what she should do next.',
      question: 'Decision:',
      options: ['Disconnect immediately', 'Ignore it (Probably a glitch)', 'Keep browsing'],
      correct_index: 0,
      level: 1
    },
    {
      id: 's4',
      title: 'The CEO Emergency',
      story: 'Vikram rushed over, looking stressed. He had just received an urgent email from someone claiming to be the CEO, asking for an immediate money transfer for a secret acquisition deal. Upon closer inspection, you noticed the email address was "ceo.globalfinance@gmail.com" instead of the official company domain. Vikram paused, realizing how unusual this request seemed.',
      question: 'What should Vikram do?',
      options: ['Send the money immediately', 'Verify first via official channels', 'Report as phishing'],
      correct_index: 2,
      level: 1
    },
    {
      id: 's5',
      title: 'The Slack Password Moment',
      story: 'In the team Slack channel, Rahul was struggling with a Jenkins server error and realized he had forgotten the admin password. Arjun told him to just post it in the channel to save time. Rahul complied, typing out "Admin password: Welcome@123" for everyone to see. Within seconds, the official security bot flagged the message for credential exposure.',
      question: 'Best course of action?',
      options: ['Delete message immediately', 'Rotate the credentials', 'Ignore (Slack is internal)'],
      correct_index: 1,
      level: 1
    },
    {
      id: 's6',
      title: 'The Unexpected IT Call',
      story: 'Your phone rang and someone claiming to be from "IT Security" said they were urgently verifying accounts due to suspicious activity. They asked you to immediately share the OTP code that was just sent to your phone so they could finish securing your workstation. Something about the caller\'s tone felt slightly off.',
      question: 'Decision:',
      options: ['Share the OTP', 'Question the caller/Verify identity', 'Report the attempt'],
      correct_index: 1,
      level: 1
    },
    {
      id: 's7',
      title: 'The Airport Screen',
      story: 'While waiting at the airport gate, a stranger nearby leaned over and remarked on your "nice dashboard." You slowly realized your laptop screen was completely visible to everyone around you. The stranger then asked if it was true that AstraNova had made 4 million this quarter, and you noticed other people nearby starting to pay attention to your work.',
      question: 'What do you do?',
      options: ['Ignore it (Stanger is just being nosey)', 'Close the laptop immediately', 'Move to a private corner'],
      correct_index: 1,
      level: 1
    },
    {
      id: 's8',
      title: 'The Curious Intern',
      story: 'It was Isha\'s first day, and she approached you with a big smile, asking for the administrator password to the production database. When you questioned why she needed such sensitive access so early, she explained that she simply wanted to learn the system as quickly as possible and didn\'t want to wait for the formal onboarding process.',
      question: 'How to respond?',
      options: ['Share it (Help the team)', 'Guide her to documentation/Read access', 'Escalate to manager'],
      correct_index: 1,
      level: 1
    },
    {
      id: 's9',
      title: 'The GitHub Shortcut',
      story: 'Arjun had an idea to speed up the development cycle by pushing the entire corporate codebase to a public GitHub repository, promising to switch it to private once he was done. However, moments after the push, a notification appeared showing that the repository had already been indexed by Google search, exposing the source code to the entire world.',
      question: 'What now?',
      options: ['Remove repo immediately', 'Notify security/Change keys', 'Hope nobody notices'],
      correct_index: 1,
      level: 2
    },
    {
      id: 's10',
      title: 'The WhatsApp Request',
      story: 'You received a message from an unknown WhatsApp number from someone claiming that an OTP meant for them was accidentally sent to your phone. They pleaded with you to send it back immediately, claiming that their job depended on it. Moments later, your phone started ringing from the same unknown number.',
      question: 'What do you do?',
      options: ['Send the OTP (Be helpful)', 'Ignore the message', 'Report as a scam'],
      correct_index: 2,
      level: 2
    },
    {
      id: 's11',
      title: 'The Conference Photo',
      story: 'A excited colleague posted a "behind-the-scenes" photo on LinkedIn to showcase AstraNova\'s new AI engine. However, when you zoomed into the image, you could clearly see a whiteboard in the background containing server keys, API endpoints, and detailed architecture diagrams of the internal infrastructure.',
      question: 'Decision:',
      options: ['Ignore (It looks cool)', 'Ask them to remove it/Edit the post', 'Report to PR department'],
      correct_index: 1,
      level: 2
    },
    {
      id: 's12',
      title: 'The Late Night Login',
      story: 'Late at night, a high-priority security alert appeared on your phone indicating a login attempt on your account from Russia. When you reached out to Arjun, who you were working with, he confirmed he was currently sitting at home in Chandigarh. Arjun suggested waiting until tomorrow to change the password.',
      question: 'Wait for tomorrow?',
      options: ['Yes, sleep is important', 'Act immediately (Reset password now)', 'Check if it was a VPN error'],
      correct_index: 1,
      level: 2
    },
    {
      id: 's13',
      title: 'The Free Premium Extension',
      story: 'Isha found a Chrome extension promising "Free ChatGPT Premium" and was eager to install it to help with her work. As she clicked install, the permissions pop-up requested full access to read and modify her company emails and internal data. Isha asked you if it would be fine to proceed, assuming a browser extension couldn\'t be that dangerous.',
      question: 'Decision:',
      options: ['Allow it', 'Remove it immediately', 'Alert IT/Governance'],
      correct_index: 1,
      level: 2
    },
    {
      id: 's14',
      title: 'The Tailgater',
      story: 'As you were badging into the secure office area, a person walked in closely behind you, thanking you for holding the door because their badge "wasn\'t working." When you politely asked which team they were on, they hesitated and said "Marketing." You suddenly remembered that your company doesn\'t actually have a marketing department in this building.',
      question: 'What do you do?',
      options: ['Let them pass', 'Verify identity/Escort to reception', 'Report to security'],
      correct_index: 1,
      level: 2
    },
    {
      id: 's15',
      title: 'The Screenshot Leak',
      story: 'A friend sent you a link to a popular developer meme account on Twitter, where you were shocked to see a screenshot of your actual client dashboard. The post was captioned "When staging becomes production" and was quickly going viral, with users tagging your company and mocking the exposed sensitive data.',
      question: 'Action?',
      options: ['Ignore (Free marketing)', 'Report the leak to Legal/PR', 'Trace the source/Identify who posted'],
      correct_index: 1,
      level: 3
    },
    {
      id: 's16',
      title: 'The Emergency Meeting',
      story: 'A Slack message appeared for an "Emergency Meeting" with a Zoom link. Half the team joined immediately, only to find a stranger recording the call. The stranger began asking detailed questions about the company\'s cloud infrastructure and backend setup, while the rest of the team looked on in confusion.',
      question: 'Decision:',
      options: ['Continue the meeting', 'Leave and report the call hijacking', 'Alert the Security officer'],
      correct_index: 1,
      level: 3
    },
    {
      id: 's17',
      title: 'The Printer Incident',
      story: 'An intern admitted to clicking on a suspicious link, and suddenly the office printer began uncontrollably printing page after page of internal logs and employee passwords. The intern was panic-stricken as a stack of confidential documents began piling up on the floor for anyone to see.',
      question: 'Decision:',
      options: ['Wait for it to finish', 'Stop printer/Unplug from network', 'Call maintenance'],
      correct_index: 1,
      level: 3
    },
    {
      id: 's18',
      title: 'The Resignation Upload',
      story: 'Rahul was packing his things on his last day, and you noticed a massive file transfer progress bar on his screen. When you asked what he was doing, he said he was just "uploading some memories" to his personal cloud. However, the data counter showed over 40GB of proprietary company project files being exfiltrated.',
      question: 'What do you do?',
      options: ['Ignore (He’s a good guy)', 'Ask him about the specific files', 'Report data exfiltration attempt'],
      correct_index: 2,
      level: 3
    },
    {
      id: 's19',
      title: 'The MFA Flood',
      story: 'Arjun complained that his phone wouldn\'t stop vibrating because of a flood of Multi-Factor Authentication alerts. Frustrated by the constant noise, he decided he would just "approve one" of the requests so the alerts would stop and he could get back to his work.',
      question: 'Decision:',
      options: ['Approve it (Silence is golden)', 'Deny and lock account', 'Report the credential attack'],
      correct_index: 1,
      level: 3
    },
    {
      id: 's20',
      title: 'The Final Incident',
      story: 'Suddenly, every screen in the office turned bright red with a message: "SECURITY ALERT: SYSTEMS LOCKED. RANSOM REQUESTED: 2 BTC." Arjun suggested that paying the ransom might be the fastest way to get everyone back to work before management found out about the breach.',
      question: 'Final Decision:',
      options: ['Pay the ransom', 'Investigate the entry point', 'Activate Incident Response Protocol'],
      correct_index: 2,
      level: 3
    }
  ]
};

const NPC_NAMES = ['Aditi', 'Raj', 'Priya', 'Vikram', 'Meera', 'Arjun', 'Neha', 'Kabir', 'Ananya', 'Rohan'];
const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

const MAX_LEVEL = 3;
const SCENARIOS_PER_LEVEL = 10;
const TIMER_SECONDS = 15;

/* ─────────────────────────────────────────────────────────
   Sitting NPC Desk Positions (normalized to 1.0)
   ───────────────────────────────────────────────────────── */
const DESK_POSITIONS = [
  { fx: 0.31, fy: 0.44, dir: 'up' },    // Row 1 Left
  { fx: 0.72, fy: 0.44, dir: 'up' },    // Row 1 Right
  { fx: 0.23, fy: 0.62, dir: 'up' },    // Row 2 Left
  { fx: 0.40, fy: 0.56, dir: 'up' },    // Row 2 Left-Center (Gray Chair)
  { fx: 0.73, fy: 0.61, dir: 'up' },    // Row 2 Right-Center (Blue Chair)
  { fx: 0.81, fy: 0.81, dir: 'up' },    // Row 2 Right (Purple Chair)
];

const PLAYER_HOME = { fx: 0.23, fy: 0.94, dir: 'up' };
const MANAGER_POS = { fx: 0.88, fy: 0.18, dir: 'down' };

/* ─────────────────────────────────────────────────────────
   Procedural isometric character texture generator.
   Creates human-looking figures that match the pixel-art
   style of the office background.
   ───────────────────────────────────────────────────────── */
function createCharacterTexture(scene, key, options = {}) {
  const {
    shirtColor = '#3B82F6',   // blue shirt
    pantsColor = '#1E293B',   // dark pants
    skinColor = '#D4A574',    // skin tone
    hairColor = '#3D2B1F',    // dark brown hair
    width = 28,
    height = 44,
    isWalking = false,
    walkFrame = 0,
    facing = 'down',         // 'down','up','left','right'
  } = options;

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  const cx = width / 2;

  // Shadow under character
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.beginPath();
  ctx.ellipse(cx, height - 2, 9, 3, 0, 0, Math.PI * 2);
  ctx.fill();

  // Leg offsets for walking animation (reduced swing to match isometric style)
  let leftLegOff = 0, rightLegOff = 0;
  if (isWalking) {
    const swing = Math.sin(walkFrame * Math.PI / 2) * 2;
    leftLegOff = swing;
    rightLegOff = -swing;
  }

  // ── Legs ──
  ctx.fillStyle = pantsColor;
  // Left leg
  ctx.fillRect(cx - 5, height - 14 + leftLegOff, 4, 10);
  // Right leg
  ctx.fillRect(cx + 1, height - 14 + rightLegOff, 4, 10);

  // ── Shoes ──
  ctx.fillStyle = '#1a1a1a';
  ctx.fillRect(cx - 6, height - 5 + leftLegOff, 5, 3);
  ctx.fillRect(cx + 1, height - 5 + rightLegOff, 5, 3);

  // ── Body/Torso ──
  ctx.fillStyle = shirtColor;
  // Torso
  ctx.fillRect(cx - 7, height - 26, 14, 14);
  // Slight shape
  ctx.fillRect(cx - 8, height - 24, 16, 10);

  // ── Arms ──
  let leftArmOff = 0, rightArmOff = 0;
  if (isWalking) {
    leftArmOff = -leftLegOff * 0.7;
    rightArmOff = -rightLegOff * 0.7;
  }
  // Left arm
  ctx.fillStyle = shirtColor;
  ctx.fillRect(cx - 11, height - 25 + leftArmOff, 4, 10);
  ctx.fillStyle = skinColor;
  ctx.fillRect(cx - 11, height - 16 + leftArmOff, 4, 3);
  // Right arm
  ctx.fillStyle = shirtColor;
  ctx.fillRect(cx + 7, height - 25 + rightArmOff, 4, 10);
  ctx.fillStyle = skinColor;
  ctx.fillRect(cx + 7, height - 16 + rightArmOff, 4, 3);

  // ── Neck ──
  ctx.fillStyle = skinColor;
  ctx.fillRect(cx - 2, height - 29, 4, 4);

  // ── Head ──
  ctx.fillStyle = skinColor;
  ctx.beginPath();
  ctx.ellipse(cx, height - 34, 6, 7, 0, 0, Math.PI * 2);
  ctx.fill();

  // ── Add detail for professional look: Suit jacket (optional) ──
  ctx.strokeStyle = 'rgba(0,0,0,0.1)';
  ctx.lineWidth = 1;
  ctx.strokeRect(cx - 7, height - 26, 14, 14);

  // ── Hair ──
  ctx.fillStyle = hairColor;
  if (facing === 'up') {
    // Full hair from behind
    ctx.beginPath();
    ctx.ellipse(cx, height - 36, 6, 6, 0, 0, Math.PI * 2);
    ctx.fill();
  } else {
    // Hair on top
    ctx.beginPath();
    ctx.ellipse(cx, height - 38, 6, 4, 0, Math.PI * 0.8, Math.PI * 2.2);
    ctx.fill();
    ctx.fillRect(cx - 6, height - 39, 12, 4);
  }

  // ── Face details (only front/side facing) ──
  if (facing === 'down' || facing === 'left' || facing === 'right') {
    // Eyes
    ctx.fillStyle = '#1a1a1a';
    if (facing === 'left') {
      ctx.fillRect(cx - 3, height - 35, 2, 2);
    } else if (facing === 'right') {
      ctx.fillRect(cx + 1, height - 35, 2, 2);
    } else {
      ctx.fillRect(cx - 3, height - 35, 2, 2);
      ctx.fillRect(cx + 1, height - 35, 2, 2);
    }
  }

  // Add to Phaser texture manager
  if (scene.textures.exists(key)) scene.textures.remove(key);
  scene.textures.addCanvas(key, canvas);
}

/* ─────────────────────────────────────────────────────────
   Generate all character animation frames as textures
   ───────────────────────────────────────────────────────── */
function generateCharacterSprites(scene, prefix, options = {}) {
  const dirs = ['down', 'up', 'left', 'right'];
  dirs.forEach(dir => {
    // Standing frame
    createCharacterTexture(scene, `${prefix}_${dir}_stand`, {
      ...options, facing: dir, isWalking: false
    });
    // Walking frames
    for (let f = 0; f < 4; f++) {
      createCharacterTexture(scene, `${prefix}_${dir}_walk${f}`, {
        ...options, facing: dir, isWalking: true, walkFrame: f
      });
    }
  });
}

/* ─────────────────────────────────────────────────────────
   Draw a stylized isometric desk graphic to canvas
   ───────────────────────────────────────────────────────── */
function createDeskTexture(scene) {
  const canvas = document.createElement('canvas');
  canvas.width = 60; canvas.height = 40;
  const ctx = canvas.getContext('2d');

  // Shadow
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  ctx.fillRect(8, 22, 44, 14);

  // Professional desk top (dark slate)
  ctx.fillStyle = '#334155';
  ctx.fillRect(5, 15, 50, 12);

  // Monitor silhouette
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(20, 5, 20, 10);
  ctx.fillRect(28, 15, 4, 2);

  if (scene.textures.exists('desk')) scene.textures.remove('desk');
  scene.textures.addCanvas('desk', canvas);
}

/* ═══════════════════════════════════════════════════════════
   OfficeScene — Main game scene
   ═══════════════════════════════════════════════════════════ */
class OfficeScene extends Phaser.Scene {
  constructor() { super('office'); }

  init() {
    this.username = localStorage.getItem('cg_username') || 'Player';
    this.domain = localStorage.getItem('cg_domain') || 'cyber';
    this.level = 1;
    this.lives = 3;
    this.maxLives = 3;
    this.correct = 0;
    this.total = 0;
    this.levelCorrect = 0;
    this.scenarioRunning = false;
    this.timerInterval = null;
    this.scenariosUsed = new Set();
    this.npcIndex = 0;
    this.gameActive = false;
    this.walkInstructionShown = false;
    this.playerFacing = 'up';
    this.playerWalkFrame = 0;
    this.playerWalkTimer = 0;
    this.playerIsSitting = true;
  }

  preload() {
    this.load.image('office_bg', 'assets/Gemini_Generated_Image_uw4itquw4itquw4i.png');
  }

  create() {
    // ── Game world dimensions (match aspect ratio of background) ──
    this.mapW = this.scale.width;
    this.mapH = this.scale.height;
    this.physics.world.setBounds(0, 0, this.mapW, this.mapH);
    this.cameras.main.setBounds(0, 0, this.mapW, this.mapH);

    // Background — fill entire game canvas
    const bg = this.add.image(0, 0, 'office_bg').setOrigin(0, 0);
    bg.setDisplaySize(this.mapW, this.mapH);
    bg.setDepth(0);

    // ── Generate character textures ──
    // Player — blue shirt
    generateCharacterSprites(this, 'player', {
      shirtColor: '#3B82F6', pantsColor: '#1E293B',
      skinColor: '#D4A574', hairColor: '#3D2B1F'
    });

    // NPC variants — different colors
    const npcStyles = [
      { shirtColor: '#A855F7', pantsColor: '#1E293B', skinColor: '#C68642', hairColor: '#1a1a1a' },
      { shirtColor: '#EF4444', pantsColor: '#374151', skinColor: '#D4A574', hairColor: '#4a3728' },
      { shirtColor: '#10B981', pantsColor: '#1F2937', skinColor: '#F0C8A0', hairColor: '#2d1b0e' },
      { shirtColor: '#F59E0B', pantsColor: '#1E293B', skinColor: '#C68642', hairColor: '#1a1a1a' },
      { shirtColor: '#EC4899', pantsColor: '#374151', skinColor: '#D4A574', hairColor: '#3D2B1F' },
      { shirtColor: '#06B6D4', pantsColor: '#1F2937', skinColor: '#F0C8A0', hairColor: '#4a3728' },
    ];
    npcStyles.forEach((style, i) => {
      generateCharacterSprites(this, `npc${i}`, style);
    });

    // ── Collision walls ──
    this.wallGroup = this.physics.add.staticGroup();
    // Outer boundary
    this.addWall(0, 0, this.mapW, 16);
    this.addWall(0, this.mapH - 16, this.mapW, 16);
    this.addWall(0, 0, 16, this.mapH);
    this.addWall(this.mapW - 16, 0, 16, this.mapH);
    // Scale collision zones to match current game dimensions
    const sx = this.mapW / 1600;
    const sy = this.mapH / 1000;

    // Create desks and NPCs
    this.deskGroup = this.physics.add.staticGroup();
    createDeskTexture(this);
    this.npcList = [];

    DESK_POSITIONS.forEach((desk, i) => {
      const dx = desk.fx * this.mapW;
      const dy = desk.fy * this.mapH;

      const d = this.deskGroup.create(dx, dy + 10, 'desk');
      d.setDepth(5 + (dy / this.mapH) * 10);
      d.setVisible(false); // Background already includes desks
      d.body.setSize(60, 30); d.body.setOffset(0, 10);

      const styleIdx = i % 6;
      const npc = this.physics.add.sprite(dx, dy - 5, `npc${styleIdx}_${desk.dir}_stand`);
      npc.setCollideWorldBounds(true);
      npc.body.setSize(18, 10);
      npc.body.setOffset(5, 34);
      npc.setDepth(d.depth - 0.1);
      npc.setScale(1.1); // 10% bigger

      npc.npcName = NPC_NAMES[i];
      npc.npcStyleIdx = styleIdx;
      npc.homeX = dx;
      npc.homeY = dy - 5;
      npc.homeDir = desk.dir;
      npc.isSitting = true;

      const label = this.add.text(npc.x, npc.y - 28, npc.npcName, {
        font: '600 9px Outfit, Inter, Arial', fill: '#c084fc',
        backgroundColor: 'rgba(8,14,26,0.85)', padding: { x: 4, y: 2 }
      }).setOrigin(0.5);
      label.setDepth(npc.depth + 1);
      npc.label = label;

      this.npcList.push(npc);
    });

    // ── Manager NPC ──
    const mx = MANAGER_POS.fx * this.mapW;
    const my = MANAGER_POS.fy * this.mapH;
    this.manager = this.physics.add.sprite(mx, my, 'npc7_down_stand'); // Using Rohan/npc7 style for manager
    this.manager.npcName = 'Manager (Mr. Singh)';
    this.manager.setDepth(5 + (my / this.mapH) * 10);
    this.manager.npcStyleIdx = 7;
    this.manager.setScale(1.1); // 10% bigger

    this.managerLabel = this.add.text(mx, my - 28, this.manager.npcName, {
      font: '700 9px Outfit, Inter, Arial', fill: '#fbbf24',
      backgroundColor: 'rgba(8,14,26,0.85)', padding: { x: 5, y: 2 }
    }).setOrigin(0.5).setDepth(this.manager.depth + 1);

    // ── Player ──
    // Start at your own home desk!
    const startX = PLAYER_HOME.fx * this.mapW;
    const startY = PLAYER_HOME.fy * this.mapH;
    this.player = this.physics.add.sprite(startX, startY, 'player_up_stand');
    this.player.setScale(1.1); // 10% bigger
    this.player.setCollideWorldBounds(true);
    // Physics body at feet for better isometric sorting/collision
    this.player.body.setSize(18, 10);
    this.player.body.setOffset(5, 34);
    this.player.setDepth(5 + (startY / this.mapH) * 10 - 0.5);

    this.cameras.main.startFollow(this.player, true, 0.08, 0.08);

    // Controls
    this.cursors = this.input.keyboard.createCursorKeys();
    this.wasd = this.input.keyboard.addKeys({ w: 'W', a: 'A', s: 'S', d: 'D' });

    // Collision Walls for the "Bay Area" (Corridors) logic
    // Block Top Area (Cafeteria/Tables)
    this.addWall(0, 0, this.mapW, this.mapH * 0.22);

    // Block Desk Islands
    // Top Row Desks
    this.addWall(this.mapW * 0.25, this.mapH * 0.22, this.mapW * 0.2, this.mapH * 0.15);
    this.addWall(this.mapW * 0.55, this.mapH * 0.22, this.mapW * 0.2, this.mapH * 0.15);

    // Middle Row Desks (Large Islands)
    this.addWall(this.mapW * 0.15, this.mapH * 0.45, this.mapW * 0.3, this.mapH * 0.18);
    this.addWall(this.mapW * 0.55, this.mapH * 0.45, this.mapW * 0.3, this.mapH * 0.18);

    // Bottom Row Desks
    this.addWall(this.mapW * 0.1, this.mapH * 0.75, this.mapW * 0.35, this.mapH * 0.22);
    this.addWall(this.mapW * 0.55, this.mapH * 0.75, this.mapW * 0.35, this.mapH * 0.22);

    // Right Sidebar (Shelf/Fridge)
    this.addWall(this.mapW * 0.88, 0, this.mapW * 0.12, this.mapH * 0.4);

    // Collision
    this.physics.add.collider(this.player, this.wallGroup);
    this.physics.add.collider(this.player, this.deskGroup);

    // Player name label
    this.playerLabel = this.add.text(this.player.x, this.player.y - 28, this.username, {
      font: '700 10px Outfit, Inter, Arial', fill: '#38bdf8',
      backgroundColor: 'rgba(8,14,26,0.85)', padding: { x: 5, y: 2 }
    }).setOrigin(0.5);

    // Scale factors stored for later use
    this.sx = sx;
    this.sy = sy;

    // HUD
    this.updateHUD();
    this.lastStepTime = 0;
    this.lastDustTime = 0;

    // Wait for user to click Start
    this._waitForStart();
  }

  _waitForStart() {
    if (window.gameStarted) {
      this.username = localStorage.getItem('cg_username') || 'Player';
      this.domain = localStorage.getItem('cg_domain') || 'cyber';
      if (this.playerLabel) this.playerLabel.setText(this.username);
      this.updateHUD();
      this.gameActive = true;
      this._showWalkInstruction();
      this.time.addEvent({ delay: 3500, callback: () => this.triggerNextScenario(), loop: false });
    } else {
      this.time.addEvent({ delay: 200, callback: () => this._waitForStart(), loop: false });
    }
  }

  _showWalkInstruction() {
    if (this.walkInstructionShown) return;
    this.walkInstructionShown = true;
    const tip = document.createElement('div');
    tip.className = 'walk-instruction';
    tip.innerHTML = `
      <div class="keys"><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></div>
      <span>or Arrow keys to walk • A colleague will approach you soon!</span>
    `;
    document.body.appendChild(tip);
    setTimeout(() => {
      tip.style.transition = 'opacity .5s, transform .5s';
      tip.style.opacity = '0';
      tip.style.transform = 'translate(-50%, 20px)';
      setTimeout(() => tip.remove(), 600);
    }, 6000);
  }

  addWall(x, y, w, h) {
    const wall = this.wallGroup.create(x + w / 2, y + h / 2, null);
    wall.setDisplaySize(w, h).refreshBody();
    wall.setVisible(false);
  }

  /* ── Update loop ─────────────────────────────────────── */
  update(time) {
    if (this.scenarioRunning || !this.gameActive) {
      this.player.setVelocity(0);
      this._setPlayerTexture('stand');
      return;
    }

    const speed = 130;
    let vx = 0, vy = 0, moving = false;

    // Check if any arrow/wasd keys are pressed to stand up
    const keysPressed = this.cursors.left.isDown || this.cursors.right.isDown ||
      this.cursors.up.isDown || this.cursors.down.isDown ||
      this.wasd.a.isDown || this.wasd.d.isDown ||
      this.wasd.w.isDown || this.wasd.s.isDown;

    if (keysPressed) {
      this.playerIsSitting = false;
    }

    if (!this.playerIsSitting) {
      if (this.cursors.left.isDown || this.wasd.a.isDown) {
        vx = -speed; this.playerFacing = 'left'; moving = true;
      }
      else if (this.cursors.right.isDown || this.wasd.d.isDown) {
        vx = speed; this.playerFacing = 'right'; moving = true;
      }

      if (this.cursors.up.isDown || this.wasd.w.isDown) {
        vy = -speed; if (!vx) this.playerFacing = 'up'; moving = true;
      }
      if (this.cursors.down.isDown || this.wasd.s.isDown) {
        vy = speed; if (!vx) this.playerFacing = 'down'; moving = true;
      }
    }

    this.player.setVelocity(vx, vy);

    if (moving) {
      this.playerWalkTimer += 1;
      if (this.playerWalkTimer > 6) {
        this.playerWalkFrame = (this.playerWalkFrame + 1) % 4;
        this.playerWalkTimer = 0;
      }
      this._setPlayerTexture(`walk${this.playerWalkFrame}`);
    } else {
      this._setPlayerTexture('stand');
      this.playerWalkFrame = 0;
      this.playerWalkTimer = 0;
    }

    if (this.playerLabel) {
      this.playerLabel.setPosition(this.player.x, this.player.y - 28);
      this.playerLabel.setDepth(this.player.depth + 1);
    }

    // Y-depth sorting
    this.player.setDepth(5 + (this.player.y / this.mapH) * 10);

    // Name label
    if (this.playerLabel) {
      this.playerLabel.setPosition(this.player.x, this.player.y - 28);
      this.playerLabel.setDepth(this.player.depth + 1);
    }

    // Footstep sounds
    if ((vx || vy) && time - this.lastStepTime > 400) {
      window.soundEngine.tick();
      this.lastStepTime = time;
    }

    // Dust particles
    if ((vx || vy) && time - this.lastDustTime > 250) {
      this.spawnDust(this.player.x, this.player.y + 16);
      this.lastDustTime = time;
    }
  }

  _setPlayerTexture(anim) {
    const key = `player_${this.playerFacing}_${anim}`;
    if (this.textures.exists(key) && this.player.texture.key !== key) {
      this.player.setTexture(key);
    }
  }

  spawnDust(x, y) {
    for (let i = 0; i < 2; i++) {
      const p = this.add.circle(
        x + Phaser.Math.Between(-4, 4), y,
        Phaser.Math.Between(1, 2), 0xaaaaaa
      ).setAlpha(0.3).setDepth(this.player.depth - 1);
      this.tweens.add({
        targets: p,
        y: y - Phaser.Math.Between(4, 10),
        alpha: 0, scale: 0.3,
        duration: Phaser.Math.Between(250, 400),
        ease: 'Power1',
        onComplete: () => p.destroy()
      });
    }
  }

  /* ── HUD ─────────────────────────────────────────────── */
  updateHUD() {
    document.getElementById('hudUser').textContent = this.username;
    document.getElementById('hudDomain').textContent = this.domain.toUpperCase();
    document.getElementById('hudLevel').textContent = `LVL ${this.level}`;
    document.getElementById('hudScore').textContent = this.correct;
    const heartsEl = document.getElementById('hudHearts');
    heartsEl.innerHTML = '';
    for (let i = 0; i < this.maxLives; i++) {
      const h = document.createElement('span');
      h.className = 'hud-heart' + (i >= this.lives ? ' lost' : '');
      h.textContent = '❤️';
      heartsEl.appendChild(h);
    }
  }

  pulseHeart() {
    const hearts = document.querySelectorAll('.hud-heart:not(.lost)');
    if (hearts.length) {
      const last = hearts[hearts.length - 1];
      last.classList.add('pulse');
      setTimeout(() => last.classList.remove('pulse'), 500);
    }
  }

  showScorePopup(text, color) {
    const el = document.createElement('div');
    el.className = 'score-popup';
    el.textContent = text;
    el.style.color = color;
    el.style.left = '50%'; el.style.top = '40%';
    el.style.transform = 'translateX(-50%)';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  }

  showFeedbackToast(text, isCorrect) {
    const el = document.createElement('div');
    el.className = 'feedback-toast';
    el.textContent = text;
    el.style.background = isCorrect ? 'rgba(52,211,153,.15)' : 'rgba(248,113,113,.15)';
    el.style.border = `1px solid ${isCorrect ? 'rgba(52,211,153,.3)' : 'rgba(248,113,113,.3)'}`;
    el.style.color = isCorrect ? '#34d399' : '#f87171';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2800);
  }

  /* ── Trigger next question from a seated NPC ──────── */
  async triggerNextScenario() {
    if (this.lives <= 0 || !this.gameActive) return;

    // Find an idle npc
    const idleNpcs = this.npcList.filter(n => n.isSitting);
    if (idleNpcs.length === 0) return;

    const npc = idleNpcs[Math.floor(Math.random() * idleNpcs.length)];
    npc.isSitting = false;

    // ── Thinking Sequence ──
    const showThought = (txt, dur) => {
      const bg = this.add.graphics();
      const t = this.add.text(npc.x, npc.y - 40, txt, {
        font: '600 10px Inter, Arial', fill: '#fff',
        backgroundColor: 'rgba(30,41,59,0.9)', padding: { x: 6, y: 4 }
      }).setOrigin(0.5).setDepth(100);
      return { bg, t, dur };
    };

    const t1 = showThought("Hmm... who should I ask...?", 3000);
    await this.delay(t1.dur);
    t1.t.destroy();

    const t2 = showThought(`Aha! ${this.username} is very knowledgeable!`, 4000);
    await this.delay(t2.dur);
    t2.t.destroy();

    // Standing up (Turn towards camera)
    this._setNpcTexture(npc, 'down', 'stand');
    await this.delay(1000);

    // L-Shaped movement to stay in corridors:
    const centralX = this.mapW * 0.5;
    const targetX = this.player.x + (this.player.x > npc.x ? -30 : 30);
    const targetY = this.player.y;

    // First: Horizontal to central corridor
    const d1 = Math.abs(centralX - npc.x);
    this._walkNpcTo(npc, centralX, npc.y, Math.max(800, d1 * 12), () => {
      // Second: Vertical to player's row
      const d2 = Math.abs(targetY - npc.y);
      this._walkNpcTo(npc, centralX, targetY, Math.max(800, d2 * 12), () => {
        // Third: Side-step to player
        const d3 = Math.abs(targetX - centralX);
        this._walkNpcTo(npc, targetX, targetY, Math.max(800, d3 * 12), () => {
          this.handleNpcArrival(npc);
        });
      });
    });
  }

  _setNpcTexture(npc, facing, anim) {
    const key = `npc${npc.npcStyleIdx}_${facing}_${anim}`;
    if (this.textures.exists(key) && npc.texture.key !== key) {
      npc.setTexture(key);
    }
  }

  _walkNpcTo(npc, tx, ty, duration, onComplete) {
    // Determine facing direction
    const dx = tx - npc.x;
    const dy = ty - npc.y;
    let facing = 'down';
    if (Math.abs(dx) > Math.abs(dy)) {
      facing = dx > 0 ? 'right' : 'left';
    } else {
      facing = dy > 0 ? 'down' : 'up';
    }

    // Walk animation
    let walkFrame = 0;
    const walkInterval = setInterval(() => {
      walkFrame = (walkFrame + 1) % 4;
      this._setNpcTexture(npc, facing, `walk${walkFrame}`);
    }, 150);

    this.tweens.add({
      targets: npc,
      x: tx, y: ty,
      duration: duration,
      ease: 'Linear',
      onUpdate: () => {
        npc.label.setPosition(npc.x, npc.y - 28);
        npc.setDepth(5 + (npc.y / this.mapH) * 10);
        npc.label.setDepth(npc.depth + 1);
      },
      onComplete: () => {
        clearInterval(walkInterval);
        this._setNpcTexture(npc, facing, 'stand');
        if (onComplete) onComplete();
      }
    });
  }

  /* ── NPC arrival ─────────────────────────────────────── */
  async handleNpcArrival(npc) {
    window.soundEngine.npcArrive();

    const greetings = [
      '💬 Hey, got a minute?', '💬 Quick question!',
      '💬 Need your help here!', '💬 Hey there!',
      '💬 Can I ask something?', '💬 Got a sec?',
    ];
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];

    const bubbleBg = this.add.graphics().setDepth(50);
    const bubbleText = this.add.text(npc.x, npc.y - 46, greeting, {
      font: '600 10px Outfit, Inter, Arial', fill: '#e2e8f0'
    }).setOrigin(0.5).setDepth(51);

    const bx = bubbleText.x - bubbleText.width / 2 - 8;
    const by = bubbleText.y - bubbleText.height / 2 - 5;
    const bw = bubbleText.width + 16;
    const bh = bubbleText.height + 10;
    bubbleBg.fillStyle(0x1e293b, 0.92);
    bubbleBg.fillRoundedRect(bx, by, bw, bh, 6);
    bubbleBg.fillTriangle(npc.x - 3, by + bh, npc.x + 3, by + bh, npc.x, by + bh + 6);

    window.soundEngine.typing();
    await this.delay(1800);
    bubbleText.destroy();
    bubbleBg.destroy();

    // Start Choice Sequence (Yes/No)
    const choice = await this.askChoice(npc, "Hey! Can I ask you a quick compliance question?");
    if (choice === 'no') {
      this.showFeedbackToast("NPC: Oh, okay. Maybe when you're less busy!", false);
    } else {
      let scenario = this.pickScenario();
      if (!scenario) {
        this.triggerVictory();
      } else {
        await this.askScenario(scenario, npc);
      }
    }

    // NPC returns to their desk via L-path
    const centralX = this.mapW * 0.5;
    const dxHoriz = Math.abs(centralX - npc.x);

    this._walkNpcTo(npc, centralX, npc.y, Math.max(800, dxHoriz * 12), () => {
      const dyVert = Math.abs(npc.homeY - npc.y);
      this._walkNpcTo(npc, centralX, npc.homeY, Math.max(800, dyVert * 12), () => {
        const dxFinal = Math.abs(npc.homeX - centralX);
        this._walkNpcTo(npc, npc.homeX, npc.homeY, Math.max(800, dxFinal * 12), () => {
          this._setNpcTexture(npc, npc.homeDir, 'stand');
          npc.isSitting = true;
          npc.setDepth(5 + (npc.homeY / this.mapH) * 10 - 0.5);

          if (this.lives > 0) {
            this.time.addEvent({ delay: 5000, callback: () => this.triggerNextScenario(), loop: false });
          }
        });
      });
    });
  }

  /* ── Ask simple Yes/No choice ───────────────────────── */
  askChoice(npc, question) {
    return new Promise(resolve => {
      this.scenarioRunning = true;
      const modal = document.getElementById('scenarioModal');
      modal.innerHTML = '';
      modal.className = 'show';

      const cloud = document.createElement('div');
      cloud.className = 'thought-cloud';
      cloud.style.padding = '24px';

      const q = document.createElement('div');
      q.className = 'scenario-question';
      q.style.marginBottom = '20px';
      q.textContent = question;
      cloud.appendChild(q);

      const btnRow = document.createElement('div');
      btnRow.style.display = 'flex';
      btnRow.style.gap = '12px';

      ['Yes', 'No'].forEach(choice => {
        const btn = document.createElement('div');
        btn.className = 'scenario-option';
        btn.textContent = choice;
        btn.style.flex = '1';
        btn.style.textAlign = 'center';
        btn.onclick = () => {
          modal.classList.remove('show');
          this.scenarioRunning = false;
          resolve(choice.toLowerCase());
        };
        btnRow.appendChild(btn);
      });

      cloud.appendChild(btnRow);
      modal.appendChild(cloud);
    });
  }

  pickScenario() {
    const pool = (SCENARIOS[this.domain] || SCENARIOS.cyber).filter(
      s => s.level <= this.level && !this.scenariosUsed.has(s.id)
    );
    if (pool.length === 0) return null;
    const s = pool[Math.floor(Math.random() * pool.length)];
    this.scenariosUsed.add(s.id);
    return s;
  }

  /* ── Scenario — Story Modal ────────────────────────── */
  askScenario(s, npc) {
    return new Promise(resolve => {
      this.scenarioRunning = true;
      const modal = document.getElementById('scenarioModal');
      modal.innerHTML = '';
      modal.className = 'show';

      const cloud = document.createElement('div');
      cloud.className = 'thought-cloud';

      // Header
      const header = document.createElement('div');
      header.className = 'cloud-header';
      const avatar = document.createElement('div');
      avatar.className = 'cloud-avatar';
      avatar.textContent = '�';
      const speakerInfo = document.createElement('div');
      const speaker = document.createElement('div');
      speaker.className = 'cloud-speaker';
      speaker.textContent = `Incident Report: ${s.title}`;
      const speakerSub = document.createElement('div');
      speakerSub.className = 'cloud-speaker-sub';
      speakerSub.textContent = `LVL ${this.level} • Compliance Scenario`;
      speakerInfo.appendChild(speaker);
      speakerInfo.appendChild(speakerSub);
      header.appendChild(avatar);
      header.appendChild(speakerInfo);
      cloud.appendChild(header);

      // Timer bar
      const timerBar = document.createElement('div');
      timerBar.className = 'scenario-timer-bar';
      timerBar.style.width = '100%';
      cloud.appendChild(timerBar);

      let answered = false;
      // Dynamic time based on word count (approx 20wpm + 15s base)
      const storyText = s.story || "";
      const totalTime = TIMER_SECONDS + Math.ceil(storyText.split(' ').length * 0.4);
      let timeLeft = totalTime;

      const timerEl = document.getElementById('hudTimer');
      timerEl.textContent = `⏱ ${Math.round(timeLeft)}s`;

      this.timerInterval = setInterval(() => {
        if (answered) return;
        timeLeft--;
        timerEl.textContent = `⏱ ${Math.max(0, Math.round(timeLeft))}s`;
        timerBar.style.width = `${(timeLeft / totalTime) * 100}%`;

        if (timeLeft <= 5) {
          timerBar.style.background = 'linear-gradient(90deg, var(--danger), var(--gold))';
          window.soundEngine.tick();
        }
        if (timeLeft <= 0) {
          answered = true;
          clearInterval(this.timerInterval);
          this.handleAnswer(false, null, s, modal, timerEl, resolve);
        }
      }, 1000);

      // Story Display (Paragraph format)
      const storyBox = document.createElement('div');
      storyBox.className = 'scenario-dialogue';
      cloud.appendChild(storyBox);

      const renderStory = async () => {
        const p = document.createElement('div');
        p.className = 'dialogue-line';
        p.style.lineHeight = '1.8';
        p.style.fontSize = '1.1rem';
        storyBox.appendChild(p);

        // Typewriter effect
        let charIndex = 0;
        const typeSpeed = 25;

        const typeChar = () => {
          if (answered) return;
          if (charIndex < storyText.length) {
            p.textContent += storyText.charAt(charIndex);
            charIndex++;
            if (charIndex % 4 === 0) window.soundEngine.typing();
            storyBox.scrollTop = storyBox.scrollHeight;
            setTimeout(typeChar, typeSpeed);
          } else {
            showChoices();
          }
        };

        const showChoices = () => {
          if (answered) return;

          // Question
          const q = document.createElement('div');
          q.className = 'scenario-question';
          q.style.marginTop = '24px';
          q.style.borderTop = '1px solid rgba(255,255,255,0.1)';
          q.style.paddingTop = '16px';
          q.textContent = s.question;
          cloud.appendChild(q);

          // Options Grid
          const optionsBox = document.createElement('div');
          optionsBox.className = 'scenario-options-grid';
          optionsBox.style.display = 'grid';
          optionsBox.style.gridTemplateColumns = '1fr';
          optionsBox.style.gap = '8px';

          s.options.forEach((opt, idx) => {
            const d = document.createElement('div');
            d.className = 'scenario-option';
            d.setAttribute('data-letter', OPTION_LETTERS[idx] || '•');
            d.innerHTML = `<span>${opt}</span>`;
            d.onclick = () => {
              if (answered) return;
              answered = true;
              clearInterval(this.timerInterval);
              const isCorrect = idx === s.correct_index;
              d.classList.add(isCorrect ? 'correct-flash' : 'wrong-flash');
              if (!isCorrect) {
                const correct = optionsBox.children[s.correct_index];
                if (correct) correct.classList.add('correct-flash');
              }
              setTimeout(() => this.handleAnswer(isCorrect, idx, s, modal, timerEl, resolve), 800);
            };
            optionsBox.appendChild(d);
          });

          // Manager Choice
          const managerBtn = document.createElement('div');
          managerBtn.className = 'scenario-option';
          managerBtn.style.border = '1.5px solid var(--gold)';
          managerBtn.style.marginTop = '12px';
          managerBtn.innerHTML = `<span style="color: var(--gold); font-weight: 700;">👨‍💼 Need help? Consult Mr. Singh (Manager)</span>`;
          managerBtn.onclick = () => {
            if (answered) return;
            answered = true;
            clearInterval(this.timerInterval);
            modal.classList.remove('show');
            this.consultManager(s, npc, resolve);
          };
          optionsBox.appendChild(managerBtn);
          cloud.appendChild(optionsBox);
        };

        typeChar();
      };

      renderStory();
      modal.appendChild(cloud);
    });
  }

  /* ── Consult Manager Sequence ───────────────────────── */
  async consultManager(scenario, originNpc, resolveScenario) {
    this.scenarioRunning = true; // Block manual input

    // 1. Walk to central corridor
    const centralX = this.mapW * 0.5;
    const managerTargetX = centralX + 30; // Stand beside manager
    const managerTargetY = this.manager.y;

    this._showWorldBubble(this.player, "Wait... I should double check this with Mr. Singh.");
    await this.delay(3000); // Slower

    // Cartoonic boing sound
    if (window.soundEngine.boing) window.soundEngine.boing();

    // Walk Player to Manager - Duration increased (8x instead of 6x)
    const dx1 = Math.abs(centralX - this.player.x);
    this._walkPlayerTo(centralX, this.player.y, dx1 * 10, () => {
      const dy1 = Math.abs(managerTargetY - this.player.y);
      this._walkPlayerTo(centralX, managerTargetY, dy1 * 10, () => {
        this._walkPlayerTo(managerTargetX, managerTargetY, 500, async () => {
          // 2. Conversation with Manager
          this._showWorldBubble(this.player, `Mr Singh, ${originNpc.npcName} asked me about ${scenario.title}. What should I do?`);
          await this.delay(4000);

          const correctOpt = scenario.options[scenario.correct_index];
          this._showWorldBubble(this.manager, `Ah, I see. In this situation, the best response is: ${correctOpt}. Compliance always comes first.`);
          await this.delay(6000); // Much slower

          this._showWorldBubble(this.player, "Understood. Thanks, Mr. Singh!");
          await this.delay(3000);

          // 3. Walk Back to origin NPC
          this._walkPlayerTo(centralX, managerTargetY, 500, () => {
            const dy2 = Math.abs(originNpc.y - this.player.y);
            this._walkPlayerTo(centralX, originNpc.y, dy2 * 10, () => {
              const finalX = originNpc.x + (originNpc.x > centralX ? -35 : 35);
              this._walkPlayerTo(finalX, originNpc.y, 500, () => {
                // Complete scenario automatically as "Correct" since manager helped
                this.handleAnswer(true, scenario.correct_index, scenario, document.getElementById('scenarioModal'), document.getElementById('hudTimer'), resolveScenario);
              });
            });
          });
        });
      });
    });
  }

  _showWorldBubble(target, text) {
    if (window.soundEngine.pop) window.soundEngine.pop();
    const bubble = this.add.text(target.x, target.y - 50, text, {
      font: '600 11px Inter, Arial', fill: '#fff',
      backgroundColor: 'rgba(15, 23, 42, 0.95)', padding: { x: 12, y: 8 },
      wordWrap: { width: 180 }
    }).setOrigin(0.5).setDepth(200);
    this.time.addEvent({ delay: 3500, callback: () => bubble.destroy() });
  }

  _walkPlayerTo(tx, ty, duration, onComplete) {
    // Standard player movement logic
    const dx = tx - this.player.x;
    const dy = ty - this.player.y;
    if (Math.abs(dx) > Math.abs(dy)) this.playerFacing = dx > 0 ? 'right' : 'left';
    else this.playerFacing = dy > 0 ? 'down' : 'up';

    this.tweens.add({
      targets: this.player,
      x: tx, y: ty,
      duration: Math.max(100, duration),
      onUpdate: () => {
        this.playerWalkTimer++;
        if (this.playerWalkTimer > 6) {
          this.playerWalkFrame = (this.playerWalkFrame + 1) % 4;
          this.playerWalkTimer = 0;
        }
        this._setPlayerTexture(`walk${this.playerWalkFrame}`);
        if (this.playerLabel) this.playerLabel.setPosition(this.player.x, this.player.y - 28);
      },
      onComplete: () => {
        this._setPlayerTexture('stand');
        if (onComplete) onComplete();
      }
    });
  }

  handleAnswer(isCorrect, selectedIdx, scenario, modal, timerEl, resolve) {
    this.total++;
    if (isCorrect) {
      this.correct++;
      this.levelCorrect++;
      window.soundEngine.correct();
      this.showScorePopup('+1 ✓', '#34d399');
      this.showFeedbackToast('✅ Correct! Great compliance awareness.', true);
      this.spawnParticles(this.player.x, this.player.y, 0x34d399, 18);
    } else {
      this.lives--;
      window.soundEngine.wrong();
      this.showScorePopup('−❤️', '#f87171');
      if (selectedIdx === null) {
        this.showFeedbackToast('❌ You are useless! You don\'t know about compliance!', false);
      } else {
        this.showFeedbackToast('❌ Not quite right. Remember this for next time!', false);
      }
      this.pulseHeart();
      this.cameras.main.shake(200, 0.008);
    }

    try {
      fetch('/api/submit-answer', {
        method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ user: this.username, domain: this.domain, scenarioId: scenario.id, selected: selectedIdx ?? -1, correct: isCorrect })
      }).catch(() => { });
    } catch (e) { }

    this.updateHUD();
    timerEl.textContent = '';

    modal.style.transition = 'transform .3s ease-in, opacity .3s ease-in';
    modal.style.transform = 'translate(-50%,-50%) scale(.9)';
    modal.style.opacity = '0';
    setTimeout(() => {
      modal.classList.remove('show');
      modal.innerHTML = '';
      modal.style.transition = ''; modal.style.transform = ''; modal.style.opacity = '';
      this.scenarioRunning = false;
    }, 350);

    if (this.lives <= 0) {
      this.time.addEvent({ delay: 600, callback: () => this.triggerGameOver(), loop: false });
      resolve(); return;
    }

    if (this.levelCorrect >= SCENARIOS_PER_LEVEL && this.level < MAX_LEVEL) {
      this.level++; this.levelCorrect = 0;
      window.soundEngine.levelUp();
      this.showScorePopup(`⬆️ LEVEL ${this.level}!`, '#fbbf24');
      this.cameras.main.flash(400, 56, 189, 248);
      this.spawnParticles(this.player.x, this.player.y, 0xfbbf24, 30);
      this.updateHUD();
    }

    const remaining = (SCENARIOS[this.domain] || SCENARIOS.cyber).filter(
      s => !this.scenariosUsed.has(s.id) && s.level <= this.level
    );
    if (remaining.length === 0 && this.level >= MAX_LEVEL) {
      this.time.addEvent({ delay: 600, callback: () => this.triggerVictory(), loop: false });
    }
    resolve();
  }

  spawnParticles(x, y, color, count) {
    const colors = [color, 0x38bdf8, 0x818cf8, 0xf472b6, 0xfbbf24];
    for (let i = 0; i < count; i++) {
      const c = colors[Math.floor(Math.random() * colors.length)];
      const p = this.add.circle(x, y, Phaser.Math.Between(2, 4), c).setDepth(60).setAlpha(0.9);
      this.tweens.add({
        targets: p,
        x: x + Phaser.Math.Between(-80, 80),
        y: y + Phaser.Math.Between(-80, 80),
        alpha: 0, scale: 0,
        duration: Phaser.Math.Between(400, 800),
        ease: 'Power2',
        onComplete: () => p.destroy()
      });
    }
  }

  triggerGameOver() {
    window.soundEngine.gameOver();
    window.soundEngine.stopAmbient();
    document.getElementById('gameOverStats').innerHTML =
      `Domain: <strong>${this.domain.toUpperCase()}</strong><br>` +
      `Level reached: <strong>${this.level}</strong><br>` +
      `Correct: <strong>${this.correct}</strong> / ${this.total}<br>` +
      `Accuracy: <strong>${this.total ? Math.round(this.correct / this.total * 100) : 0}%</strong>`;
    document.getElementById('gameOverOverlay').classList.add('show');
  }

  triggerVictory() {
    window.soundEngine.victory();
    window.soundEngine.stopAmbient();
    document.getElementById('victoryStats').innerHTML =
      `Domain: <strong>${this.domain.toUpperCase()}</strong><br>` +
      `Levels completed: <strong>${MAX_LEVEL}</strong><br>` +
      `Score: <strong>${this.correct}</strong> / ${this.total}<br>` +
      `Accuracy: <strong>${this.total ? Math.round(this.correct / this.total * 100) : 0}%</strong>`;
    document.getElementById('victoryOverlay').classList.add('show');
    this.startConfetti();
  }

  startConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    canvas.style.display = 'block';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    const pieces = [];
    const colors = ['#38bdf8', '#818cf8', '#f472b6', '#34d399', '#fbbf24', '#f87171', '#a78bfa', '#2dd4bf'];
    for (let i = 0; i < 180; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: Math.random() * 10 + 4, h: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        vy: Math.random() * 3 + 2, vx: (Math.random() - 0.5) * 2.5,
        rot: Math.random() * 360, rv: (Math.random() - 0.5) * 10
      });
    }
    let frames = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.rot += p.rv;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot * Math.PI / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      frames++;
      if (frames < 300) requestAnimationFrame(draw);
      else canvas.style.display = 'none';
    };
    draw();
  }

  delay(ms) { return new Promise(r => setTimeout(r, ms)); }
}

/* ── Bootstrap ─────────────────────────────────────────── */
window.gameStarted = false;

window.addEventListener('load', () => {
  const config = {
    type: Phaser.AUTO,
    parent: 'gameContainer',
    backgroundColor: '#080e1a',
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: window.innerWidth,
      height: window.innerHeight,
    },
    physics: {
      default: 'arcade',
      arcade: { debug: false }
    },
    scene: [OfficeScene],
  };
  new Phaser.Game(config);
});
