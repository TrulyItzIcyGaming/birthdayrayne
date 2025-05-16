document.addEventListener('DOMContentLoaded', async () => {
    const config = await fetch('config.json').then(res => res.json());
    const container = document.getElementById('main-container');
    
    // Generate sections
    container.innerHTML = `
        <section class="section" id="cover">
            <h1 class="header heartbeat">For ${config.theirName}</h1>
            <div class="scroll-prompt">▼ Scroll to Begin ▼</div>
        </section>
        
        <section class="section" id="qualities">
            <h2 class="subheader">Why You're Amazing</h2>
            <div class="quality-grid"></div>
        </section>
        
        <section class="section" id="timeline">
            <h2 class="subheader">Our Journey</h2>
            <div class="timeline-container"></div>
        </section>
        
        <!-- 8 more sections... -->
    `;

    // Populate dynamic content
    populateQualities(config.qualities);
    buildTimeline(config.memories);
    initMusicPlayer(config.playlist);
    // More initialization...
});

// 50+ helper functions...
