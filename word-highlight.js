// Detailed Tamil history content for word highlighting
const text = `The Tamil civilization is among the oldest continuous cultures in the world, with roots stretching back at least 3500 BCE, and possibly earlier. Archaeological discoveries at sites like Keezhadi (Keeladi) in Tamil Nadu have pushed the timeline of urban Tamil culture to at least 600 BCE, with some evidence suggesting settlements as early as 3000 BCE. Keezhadi’s excavations have revealed advanced urban planning, brick structures, and, most significantly, pot shards inscribed with Tamil-Brahmi script. These inscriptions, found on everyday objects, indicate that literacy was not limited to elites—common people, too, were literate, making ancient Tamil society one of the earliest mass-literate cultures in the world.\n\nThe ancient Sangam literature, some of which may date back to the 1st millennium BCE, describes a sophisticated society with established cities, trade, and a vibrant literary tradition. The legendary lost continent of Kumari Kandam, referenced in Tamil literature, is believed by some to have been a cradle of early Dravidian civilization, much of which was lost to the sea in ancient cataclysms.\n\nMany scholars now believe that the Indus Valley Civilization (IVC), one of the world’s earliest urban cultures (c. 3300–1300 BCE), was Dravidian in origin, with strong linguistic and cultural links to the Tamils. Parallels in script, motifs, and religious practices—such as the worship of the Mother Goddess, use of the bull as a sacred symbol, and the presence of graffiti marks similar to those found in Tamil Nadu—suggest a deep connection. The collapse of the IVC around 1500 BCE may have led to the southward migration of Dravidian peoples, further enriching the Tamil heartland.\n\nKeezhadi, near Madurai, is a watershed in Indian archaeology. Excavations have unearthed a planned city with brick houses, wells, drainage, and a wealth of artifacts. The most remarkable finds are pot shards with Tamil-Brahmi inscriptions, some dating to the 6th century BCE. These inscriptions, often names or short phrases, show that writing was used by ordinary people, not just priests or kings. This challenges the notion that literacy in ancient times was exclusive, and places the Tamils among the earliest literate societies.\n\nThe Sangam Age (c. 300 BCE–300 CE) is renowned for its poetry, which covers themes of love, war, ethics, and governance. The three crowned dynasties—Chola, Chera, and Pandya—ruled over a land of bustling cities, ports, and fertile fields. Tamil society was open and pluralistic, with Jainism, Buddhism, and Hinduism coexisting. Women poets and rulers were not uncommon. Trade flourished with Rome, Egypt, Southeast Asia, and China. Tamil merchants sailed the Indian Ocean, and Roman coins and amphorae have been found in Tamil Nadu.\n\nThe Chola dynasty (c. 9th–13th centuries CE) built one of the greatest maritime empires in history. Under Rajaraja Chola I and Rajendra Chola I, the Cholas controlled the Indian Ocean trade routes, conquered Sri Lanka, the Maldives, and even sent naval expeditions to Southeast Asia, including Srivijaya (Sumatra). Their navy was the most powerful in Asia, and their influence reached as far as China. The Cholas built monumental temples, such as the Brihadeeswarar Temple in Thanjavur, a UNESCO World Heritage site and a marvel of engineering and art.\n\nThe Kallanai (Grand Anicut), built by Karikala Chola around the 2nd century CE, is the world’s oldest functioning dam, still regulating the flow of the Kaveri River. The Brihadeeswarar Temple in Thanjavur, built in the 11th century, is a masterpiece of Chola architecture, with a 66-meter-tall granite tower and exquisite sculptures. The Sittanavasal Cave, dating to the 7th century, contains Jain frescoes and is famous for its acoustics—chanting “Om” inside produces a unique reverberation. These monuments showcase the Tamils’ mastery of engineering, art, and spirituality.\n\nTamils were pioneers in metallurgy. Wootz steel, produced in ancient Tamilakam, was famed worldwide for its strength and flexibility, used to make the legendary Damascus swords. The aympon (five-metal) alloy was used in making idols and utensils. Tamil mathematicians, astronomers, and physicians made significant contributions to science. The region’s guilds and trade organizations were among the earliest forms of corporate institutions.\n\nThe Pandya dynasty, with roots stretching back to at least 300 BCE and possibly much earlier, is considered one of the longest-reigning dynasties in world history. The Pandyas were renowned for their patronage of literature, temples, and trade. Their capital, Madurai, is one of the world’s oldest continuously inhabited cities. The dynasty survived through centuries of upheaval, adapting and thriving until the advent of colonial rule.\n\nToday, Tamil is one of the world’s oldest living languages, spoken by over 80 million people worldwide. Tamil culture, literature, music, and dance continue to thrive, both in India and across the global diaspora. The Tamils’ legacy of innovation, resilience, and openness to the world remains a source of inspiration for all humanity.`;

const container = document.getElementById('word-demo-text');

function createWordSpans(text) {
  // Split by spaces, but keep punctuation attached to words
  return text.split(/(\s+)/).map((word, i) => {
    if (word.trim() === '') return word; // keep spaces
    return `<span class="word-span emotional">${word}</span>`;
  }).join('');
}

function reserveMaxWidthForWords() {
  container.querySelectorAll('.word-span').forEach(span => {
    // Save original settings
    const originalSettings = span.style.fontVariationSettings;
    // Set to max weight
    span.style.fontVariationSettings = "'wght' 1000";
    // Force reflow and measure
    const width = span.offsetWidth;
    // Set min-width
    span.style.minWidth = width + "px";
    // Restore original settings
    span.style.fontVariationSettings = originalSettings;
  });
}

container.innerHTML = createWordSpans(text);
reserveMaxWidthForWords();

// Add hover listeners to each word
container.querySelectorAll('.word-span').forEach(span => {
  span.addEventListener('mouseenter', () => {
    span.style.fontVariationSettings = "'wght' 1000";
    span.classList.add('active');
  });
  span.addEventListener('mouseleave', () => {
    span.style.fontVariationSettings = "'wght' -1000";
    span.classList.remove('active');
  });
}); 