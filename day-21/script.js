const reels = [
    {
        id: 1,
        username: "travel_with_me",
        userprofile: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
        image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg", // Mountain sunset
        likeCount: 12500,
        isLiked: false,
        commentCount: 342,
        shareCount: 89,
        caption: "Chasing sunsets around the world 🌅✈️ #travel #wanderlust",
        video: "",
        isFollowed: false,
        music: "Sunset Dreams - Original Audio",
        timestamp: "2 hours ago",
        location: "Bali, Indonesia"
    },
    {
        id: 2,
        username: "foodie_paradise",
        userprofile: "https://images.pexels.com/photos/339619/pexels-photo-339619.jpeg",
        image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg", // Pasta dish
        likeCount: 89500,
        isLiked: true,
        commentCount: 1250,
        shareCount: 456,
        caption: "When in Rome, eat as the Romans do! 🍝🇮🇹 #food #italianfood",
        video: "",
        isFollowed: true,
        music: "Italian Restaurant Vibes",
        timestamp: "1 day ago",
        location: "Rome, Italy"
    },
    {
        id: 3,
        username: "fitness_motivation",
        userprofile: "https://images.pexels.com/photos/767964/pexels-photo-767964.jpeg",
        image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg", // Gym workout
        likeCount: 23400,
        isLiked: false,
        commentCount: 678,
        shareCount: 123,
        caption: "Morning workout complete! 💪 Day 45 of my fitness journey. #fitness #workout",
        video: "",
        isFollowed: false,
        music: "Workout Motivation Mix",
        timestamp: "3 hours ago",
        location: "Gym"
    },
    {
        id: 4,
        username: "pet_lovers",
        userprofile: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg",
        image: "https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg", // Cute dog
        likeCount: 156700,
        isLiked: true,
        commentCount: 2345,
        shareCount: 789,
        caption: "Meet Luna, my new golden retriever puppy! 🐶❤️ #dogs #puppy",
        video: "",
        isFollowed: true,
        music: "Happy Puppy Sounds",
        timestamp: "5 hours ago",
        location: "Home"
    },
    {
        id: 5,
        username: "art_daily",
        userprofile: "https://images.pexels.com/photos/1105058/pexels-photo-1105058.jpeg",
        image: "https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg", // Painting art
        likeCount: 67800,
        isLiked: false,
        commentCount: 890,
        shareCount: 234,
        caption: "New painting inspired by Van Gogh's Starry Night ✨🎨 #art #painting",
        video: "",
        isFollowed: false,
        music: "Creative Process - Lofi",
        timestamp: "2 days ago",
        location: "Art Studio"
    },
    {
        id: 6,
        username: "tech_reviews",
        userprofile: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
        image: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg", // Smartphone tech
        likeCount: 43200,
        isLiked: false,
        commentCount: 567,
        shareCount: 145,
        caption: "Unboxing the latest smartphone! 📱 What features are you most excited about? #tech #gadgets",
        video: "",
        isFollowed: false,
        music: "Tech Unboxing Theme",
        timestamp: "1 day ago",
        location: "Tech Lab"
    },
    {
        id: 7,
        username: "fashion_style",
        userprofile: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg",
        image: "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg", // Fashion model
        likeCount: 98700,
        isLiked: true,
        commentCount: 1567,
        shareCount: 432,
        caption: "Spring collection is here! Which outfit is your favorite? 👗🌸 #fashion #style",
        video: "",
        isFollowed: true,
        music: "Fashion Show Beat",
        timestamp: "6 hours ago",
        location: "Paris Fashion Week"
    },
    {
        id: 8,
        username: "nature_lovers",
        userprofile: "https://images.pexels.com/photos/15286/pexels-photo.jpg",
        image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg", // Mountain landscape
        likeCount: 76500,
        isLiked: false,
        commentCount: 987,
        shareCount: 321,
        caption: "Morning hike in the mountains. Nothing beats fresh mountain air! ⛰️🌲 #nature #hiking",
        video: "",
        isFollowed: false,
        music: "Nature Sounds - Birds Chirping",
        timestamp: "1 day ago",
        location: "Swiss Alps"
    },
    {
        id: 9,
        username: "music_producer",
        userprofile: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg",
        image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg", // DJ equipment
        likeCount: 54300,
        isLiked: false,
        commentCount: 765,
        shareCount: 198,
        caption: "Just dropped my new track! Link in bio 🎵🎶 #music #producer",
        video: "",
        isFollowed: false,
        music: "My New Track - Listen Now",
        timestamp: "4 hours ago",
        location: "Recording Studio"
    },
    {
        id: 10,
        username: "cozy_home",
        userprofile: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
        image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg", // Cozy living room
        likeCount: 32100,
        isLiked: true,
        commentCount: 432,
        shareCount: 167,
        caption: "Sunday home decor ideas for a cozy living room 🛋️✨ #homedecor #interiordesign",
        video: "",
        isFollowed: true,
        music: "Cozy Sunday Jazz",
        timestamp: "2 days ago",
        location: "My Home"
    }
];

let container = document.querySelector('main')

function addReels(){
    let allReels = ``
    reels.forEach((reel, index) => {
        allReels += `
    <section class="container">
        <section class="allReels">
            <div class="reel">
                <img src="${reel.image}" alt="${reel.caption}">
                <div class="bottom">
                    <div class="user">
                        <img src="${reel.userprofile}" alt="${reel.username}">
                        <h2>${reel.username}</h2>
                        <button class="follow-btn ${reel.isFollowed ? 'following' : 'follow'}" data-id="${reel.id}" data-followed="${reel.isFollowed}" 
                        
                        >
                            ${reel.isFollowed ? 'Following' : 'Follow'}
                        </button>
                    </div>
                    <div class="title">
                        <h3>${reel.caption}</h3>
                        <p style="font-size: 0.9rem; opacity: 0.8; margin-top: 0.5rem;">
                            <i class="ri-music-2-line"></i> ${reel.music} • ${reel.location}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="stats">
            <div class="like" id="${index}" data-id="${reel.id}" data-liked="${reel.isLiked}">
                <h4><i class="${reel.isLiked ? 'ri-heart-3-fill' : 'ri-heart-3-line'}"></i></h4>
                <h5 class="like-count">${reel.likeCount.toLocaleString()}</h5>
            </div>
            <div class="comment">
                <h4><i class="ri-chat-3-line"></i></h4>
                <h5>${reel.commentCount.toLocaleString()}</h5>
            </div>
            <div class="share">
                <h4><i class="ri-send-plane-line"></i></h4>
                <h5>${reel.shareCount.toLocaleString()}</h5>
            </div>
            <div class="menu">
                <h4><i class="ri-more-2-line"></i></h4>
            </div>
        </section>
    </section>
    `;
    });

    container.innerHTML = allReels;
}
addReels();


// Like functionality
document.querySelectorAll('.like h4').forEach(likeIcon => {
    likeIcon.addEventListener('click', (e) => {
        const likeDiv = e.target.closest('.like');
        const likeCountElement = likeDiv.querySelector('.like-count');
        const icon = likeDiv.querySelector('i');

        let currentLikes = parseInt(likeCountElement.textContent.replace(/,/g, ''));
        const isLiked = icon.classList.contains('ri-heart-3-fill');

        if (isLiked) {
            currentLikes -= 1;
            icon.className = 'ri-heart-3-line';
        } else {
            currentLikes += 1;
            icon.className = 'ri-heart-3-fill';
        }

        likeCountElement.textContent = currentLikes.toLocaleString();
        console.log("Like clicked!");
    });
});

// Comment functionality
document.querySelectorAll('.comment h4').forEach(commentIcon => {
    commentIcon.addEventListener('click', (e) => {
        console.log("Comment clicked!");
        // Comment logic here
    });
});

// Share functionality  
document.querySelectorAll('.share h4').forEach(shareIcon => {
    shareIcon.addEventListener('click', (e) => {
        console.log("Share clicked!");
        // Share logic here
    });
});

// Menu functionality
document.querySelectorAll('.menu h4').forEach(menuIcon => {
    menuIcon.addEventListener('click', (e) => {
        console.log("Menu clicked!");
        // Menu logic here
    });
});

document.querySelectorAll('.follow-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const isFollowing = button.classList.contains('following');

        if (isFollowing) {
            button.textContent = 'Follow';
            button.classList.remove('following');
            button.style.backgroundColor = '#0095f6';
        } else {
            button.textContent = 'Following';
            button.classList.add('following');
            button.style.backgroundColor = '#666';
        }

        console.log(isFollowing ? 'Unfollowed' : 'Followed');
    });
});