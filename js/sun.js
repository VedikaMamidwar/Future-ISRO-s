function showMissionDetails(mission) {
    const details = {
        'Mission 1': {
            title: 'Mission 1: Gaganyaan',
            description: 'India\'s first crewed space mission aimed at sending Indian astronauts to space.'
        },
        'Mission 2': {
            title: 'Mission 2: Aditya-L1',
            description: 'A mission to study the Sun and understand its impact on the Earth.'
        },
        'Mission 3': {
            title: 'Mission 3: Chandrayaan-3',
            description: 'This mission aims to explore the lunar surface and establish a presence on the Moon.'
        }
    };

    document.getElementById('missionTitle').innerText = details[mission].title;
    document.getElementById('missionDescription').innerText = details[mission].description;
    document.getElementById('missionDetails').style.display = 'block';
}

function closeModal() {
    document.getElementById('missionDetails').style.display = 'none';
}
