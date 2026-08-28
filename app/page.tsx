import MusicPlayer from './music-player';

const updates = [
  {
    game: 'VALORANT', badge: 'PATCH 13.04', date: '18 AUG 2026',
    title: 'New map rotation & precision fixes',
    body: 'The latest competitive update brings a refreshed map rotation plus focused fixes for Agents and melee skins.',
    href: 'https://playvalorant.com/en-us/news/game-updates/valorant-patch-notes-13-04/', tone: 'valorant', mark: 'V',
  },
  {
    game: 'MINECRAFT: JAVA', badge: 'SNAPSHOT 10', date: '25 AUG 2026',
    title: 'Dappled Forest takes the main menu',
    body: 'Snapshot 10 adds a Dappled Forest panorama, a new Realms introduction, performance improvements and technical changes.',
    href: 'https://www.minecraft.net/en-us/article/minecraft-26-3-snapshot-10', tone: 'minecraft', mark: 'M',
  },
  {
    game: 'VALORANT', badge: 'ESPORTS', date: '21 AUG 2026',
    title: 'Game Changers Stage 2 is locked in',
    body: 'The North America main event begins September 1 with the Grand Finals heading to LAN on September 17.',
    href: 'https://playvalorant.com/en-us/news/', tone: 'valorant alt', mark: 'GC',
  },
];

export default function Home() {
  return (
    <main className="shell">
      <div className="particle-field" aria-hidden="true">{Array.from({ length: 14 }, (_, index) => <i key={index} />)}</div>
      <section className="hero">
        <nav className="nav">
          <a className="brand" href="#top" aria-label="RolxOfficial home"><span>R</span> ROLXOFFICIAL</a>
          <div className="navlinks"><a href="#top">Home</a><a href="#about">About</a><a href="#games">Games</a><a href="#updates">Updates</a><a href="#live">Live</a></div>
          <a className="join" href="https://discord.com/invite/ChT2ZEqr7y" target="_blank" rel="noreferrer">Join the squad</a>
          <details className="mobile-menu"><summary>Menu <b>＋</b></summary><div><a href="#top">Home</a><a href="#about">About</a><a href="#games">Games</a><a href="#updates">Updates</a><a href="#live">Live</a><a href="https://discord.com/invite/ChT2ZEqr7y" target="_blank" rel="noreferrer">Discord ↗</a></div></details>
        </nav>
        <div className="hero-art" aria-hidden="true" />
        <div className="hero-vignette" aria-hidden="true" />
        <div className="hero-copy" id="top">
          <div className="eyebrow"><span /> Your gaming intel, upgraded</div>
          <h1>STAY AHEAD.<br/><em>PLAY BOLD.</em></h1>
          <p>Fresh Valorant patches, Minecraft drops, and RolxOfficial live status—all in one high-signal gaming hub.</p>
          <div className="actions"><a className="primary" href="#updates">Explore updates <b>↗</b></a><a className="secondary" href="#live"><i /> Check live status</a></div>
        </div>
        <div className="hero-stats glass"><div><strong>02</strong><span>GAMES TRACKED</span></div><div><strong>24/7</strong><span>INTEL FEED</span></div><div><strong>0</strong><span>FLUFF</span></div></div>
        <div className="scroll">SCROLL TO DISCOVER <span>↓</span></div>
      </section>

      <section className="manifesto" id="about"><span className="big-r">R</span><div><div className="kicker"><span>01</span> BUILT FOR PLAYERS</div><h2>ONE HUB.<br/><em>EVERY DROP.</em></h2><p>RolxOfficial is where competitive focus meets creative exploration. Stay current, find the official source, and get back in the game.</p></div></section>

      <section className="game-split" id="games">
        <a className="game-panel val-panel" href="https://playvalorant.com/en-us/news/tags/patch-notes/" target="_blank" rel="noreferrer"><div className="panel-index">01</div><div className="panel-mark">V</div><div className="panel-copy"><span>TACTICAL INTEL</span><h2>VALORANT</h2><p>Patch notes, Agent changes, competitive updates and esports headlines.</p><b>Open Riot newsroom ↗</b></div></a>
        <a className="game-panel mine-panel" href="https://www.minecraft.net/en-us/articles" target="_blank" rel="noreferrer"><div className="panel-index">02</div><div className="blocks" aria-hidden="true"><i/><i/><i/><i/><i/></div><div className="panel-mark">M</div><div className="panel-copy"><span>WORLD INTEL</span><h2>MINECRAFT</h2><p>Snapshots, Bedrock previews, game drops and deep dives from Mojang.</p><b>Open Minecraft news ↗</b></div></a>
      </section>

      <section className="section updates-section" id="updates">
        <div className="section-head"><div><div className="kicker"><span>03</span> THE LATEST</div><h2>PATCH NOTES.<br/><em>ZERO NOISE.</em></h2></div><p>Hand-picked updates from the official Riot Games and Minecraft newsrooms. Read the signal. Skip the scroll.</p></div>
        <div className="update-grid">
          {updates.map((item, index) => (
            <a className={`update-card glass ${index === 0 ? 'featured' : ''}`} href={item.href} target="_blank" rel="noreferrer" key={item.title}>
              <div className={`card-visual ${item.tone}`}><span className="game-mark">{item.mark}</span><span className="card-number">0{index + 1}</span><div className="gridlines" /></div>
              <div className="card-content"><div className="card-meta"><span>{item.game}</span><time>{item.date}</time></div><h3>{item.title}</h3><p>{item.body}</p><div className="card-foot"><span>{item.badge}</span><b>Read official notes ↗</b></div></div>
            </a>
          ))}
        </div>
        <div className="source-note"><span>●</span> Sources checked against official game newsrooms · Updated 28 Aug 2026</div>
      </section>

      <section className="section live-section" id="live">
        <div className="live-card glass">
          <div className="live-copy"><div className="kicker"><span>04</span> CREATOR STATUS</div><h2>IS ROLX<br/><em>LIVE?</em></h2><p>No video auto-plays here. Check the channel&apos;s live room in one click and jump in only when you want.</p><a className="primary" href="https://www.youtube.com/@RolxOfficial/live" target="_blank" rel="noreferrer">Check live room <b>↗</b></a></div>
          <div className="status-module"><div className="scanline"/><div className="channel-avatar">R</div><div className="status-label"><span className="pulse"/> LIVE STATUS</div><strong>CHECK<br/>YOUTUBE</strong><p>@RolxOfficial</p><a href="https://www.youtube.com/@RolxOfficial" target="_blank" rel="noreferrer">VIEW CHANNEL ↗</a><small>STATUS VERIFIES ON YOUTUBE · NO AUTOPLAY</small></div>
        </div>
      </section>

      <footer>
        <div className="footer-main"><a className="brand" href="#top"><span>R</span> ROLXOFFICIAL</a><p>Valorant is a trademark of Riot Games. Minecraft is a trademark of Microsoft. This is an independent fan update hub.</p><div className="footer-links"><a href="https://www.youtube.com/@RolxOfficial" target="_blank" rel="noreferrer">YOUTUBE ↗</a><a href="#top">BACK TO TOP ↑</a></div></div>
        <div className="music-credit glass">
          <div className="music-copy"><span className="music-label">NOW AVAILABLE</span><h3>Mortals Funk Remix</h3><p>LXNGVX, Warriyo</p></div>
          <MusicPlayer />
          <div className="credit-copy"><strong>MUSIC CREDIT</strong><p>Song: LXNGVX, Warriyo — Mortals Funk Remix<br/>Music provided by NoCopyrightSounds</p><div><a href="http://ncs.io/MortalsFunkWatch" target="_blank" rel="noreferrer">FREE DOWNLOAD / STREAM ↗</a><a href="http://ncs.lnk.to/MortalsFunkAT/youtube" target="_blank" rel="noreferrer">WATCH ON YOUTUBE ↗</a></div></div>
        </div>
      </footer>
    </main>
  );
}
