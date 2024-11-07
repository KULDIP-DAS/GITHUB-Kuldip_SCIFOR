
        


// Js for button--->

function showLogin() {
document.querySelector('.container').innerHTML = `
<div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
    <div style="border: 2px solid #1DB954; border-radius: 8px; padding: 20px; max-width: 400px; width: 100%; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
        <h1 style="color: #1DB954; text-align: center; font-size: 1.8rem; margin-bottom: 1rem;">Login</h1>
        <form style="display: flex; flex-direction: column; gap: 10px;">
            <input type="text" placeholder="Username" required style="padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
            <input type="password" placeholder="Password" required style="padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
            <button type="submit" style="padding: 10px; background-color: #1DB954; color: white; border: none; border-radius: 5px; font-size: 1rem; cursor: pointer;">Login</button>
        </form>
    </div>
</div>
`;
}

function showSignup() {
document.querySelector('.container').innerHTML = `
<div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
    <div style="border: 2px solid #1DB954; border-radius: 8px; padding: 20px; max-width: 400px; width: 100%; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
        <h1 style="color: #1DB954; text-align: center; font-size: 1.8rem; margin-bottom: 1rem;">Signup</h1>
        <form style="display: flex; flex-direction: column; gap: 10px;">
            <input type="text" placeholder="Username" required style="padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
            <input type="email" placeholder="Email" required style="padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
            <input type="password" placeholder="Password" required style="padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
            <button type="submit" style="padding: 10px; background-color: #1DB954; color: white; border: none; border-radius: 5px; font-size: 1rem; cursor: pointer;">Signup</button>
        </form>
    </div>
</div>
`;
}
// popup
function openSearch() {
    document.getElementById('searchPopup').style.display = 'block';
}

function closeSearch() {
    document.getElementById('searchPopup').style.display = 'none';
}

 



// Function to show the create playlist form
function showCreatePlaylist() {
    document.getElementById('create-playlist-form').style.display = 'block';
}

// Function to hide the create playlist form
function hideCreatePlaylist() {
    document.getElementById('create-playlist-form').style.display = 'none';
}

// Function to add a new playlist
function addPlaylist() {
    const name = document.getElementById('playlist-name').value;
    const description = document.getElementById('playlist-description').value;

    // Here you can add logic to actually save the playlist
    // For now, we'll just log the values to the console
    console.log('Playlist Created:', name, description);

    // Clear the form
    document.getElementById('playlist-name').value = '';
    document.getElementById('playlist-description').value = '';
    hideCreatePlaylist();
}


// Add this function to mp.js or within a <script> tag in your HTML
function showLikedSongs() {
    // This is just a placeholder. You can replace this with code to display liked songs.
    alert("Displaying liked songs!");
    
    // For example, you can dynamically create a new section or redirect to a new page
    // You could also fetch and display a list of liked songs here.
  }
  
// liked songs
 
function showLikedSongs() {
  document.getElementById("liked-songs-modal").style.display = "block";
}

function closeLikedSongs() {
  document.getElementById("liked-songs-modal").style.display = "none";
}

