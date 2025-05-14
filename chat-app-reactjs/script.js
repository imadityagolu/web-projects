document.addEventListener("DOMContentLoaded", () => {
    const chatList = document.getElementById("chat-list");
    const messagesContainer = document.getElementById("messages");
    const messageForm = document.getElementById("message-form");
    const messageInput = document.getElementById("message-input");
    const chatHeader = document.getElementById("chat-header");
    const userImage = document.getElementById("user-image");
    const lastSeen = document.getElementById("last-seen");
    const header = document.querySelector("header");
    let selectedChat = null;

    // Format timestamp
    const formatTimestamp = (date) => {
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    };

    // Apply saved settings
    const applySavedSettings = () => {
      const savedHeaderColor = localStorage.getItem("headerColor");
      const savedChatBgType = localStorage.getItem("chatBgType");
      const savedChatBgValue = localStorage.getItem("chatBgValue");
      if (savedHeaderColor) {
        header.style.backgroundColor = savedHeaderColor;
      }
      if (savedChatBgType && savedChatBgValue) {
        if (savedChatBgType === "color") {
          messagesContainer.style.background = savedChatBgValue;
          messagesContainer.style.backgroundImage = "none";
        } else if (savedChatBgType === "pattern") {
          messagesContainer.style.backgroundImage = savedChatBgValue;
          messagesContainer.style.backgroundSize = "auto";
        }
      }
    };

    // Handle header color change
    document.querySelectorAll(".header-color").forEach(button => {
      button.addEventListener("click", () => {
        const color = button.dataset.color;
        header.style.backgroundColor = color;
        localStorage.setItem("headerColor", color);
      });
    });

    // Handle chat background change
    document.querySelectorAll(".chat-bg").forEach(button => {
      button.addEventListener("click", () => {
        const bgType = button.dataset.bg;
        const bgValue = button.dataset.value;
        if (bgType === "color") {
          messagesContainer.style.background = bgValue;
          messagesContainer.style.backgroundImage = "none";
        } else if (bgType === "pattern") {
          messagesContainer.style.backgroundImage = bgValue;
          messagesContainer.style.backgroundSize = "auto";
        }
        localStorage.setItem("chatBgType", bgType);
        localStorage.setItem("chatBgValue", bgValue);
      });
    });

    // Load chat data
    fetch("chatData.json")
      .then(response => response.json())
      .then(data => {
        data.chats.forEach((chat, index) => {
          const chatItem = document.createElement("div");
          chatItem.className = "chat-item";
          chatItem.innerHTML = `
            <img src="${chat.image || 'https://via.placeholder.com/50'}" class="avatar" alt="${chat.user} avatar">
            <div class="chat-info">
              <strong>${chat.user}</strong>
              <p>${chat.lastMessage}</p>
            </div>
          `;
          chatItem.addEventListener("click", () => {
            // Update active state
            document.querySelectorAll(".chat-item").forEach(item => item.classList.remove("active"));
            chatItem.classList.add("active");
            selectedChat = chat;

            // Update chat header
            chatHeader.querySelector("h2").textContent = chat.user;
            userImage.src = chat.image || "https://via.placeholder.com/40";
            lastSeen.textContent = chat.lastSeen || "Last seen unknown";
            chatHeader.classList.remove("d-none");

            // Show message form
            messageForm.classList.remove("d-none");

            // Load messages
            messagesContainer.innerHTML = "";
            chat.messages.forEach(message => {
              const messageDiv = document.createElement("div");
              messageDiv.className = `message ${message.sender === "You" ? "message-you" : "message-other"}`;
              messageDiv.innerHTML = `
                ${message.content}
                <div class="timestamp">${message.timestamp}</div>
              `;
              messagesContainer.appendChild(messageDiv);
            });
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
          });
          chatList.appendChild(chatItem);
        });
      })
      .catch(error => console.error("Error loading chat data:", error));

    // Handle message sending
    messageForm.addEventListener("submit", e => {
      e.preventDefault();
      if (!selectedChat || !messageInput.value.trim()) return;

      const newMessage = {
        sender: "You",
        content: messageInput.value.trim(),
        timestamp: formatTimestamp(new Date())
      };

      // Update UI
      const messageDiv = document.createElement("div");
      messageDiv.className = "message message-you";
      messageDiv.innerHTML = `
        ${newMessage.content}
        <div class="timestamp">${newMessage.timestamp}</div>
      `;
      messagesContainer.appendChild(messageDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;

      // Update selected chat's data (in-memory)
      selectedChat.messages.push(newMessage);
      selectedChat.lastMessage = newMessage.content;

      // Update chat list
      const chatItems = chatList.querySelectorAll(".chat-item");
      chatItems.forEach(item => {
        if (item.querySelector(".chat-info strong").textContent === selectedChat.user) {
          item.querySelector(".chat-info p").textContent = selectedChat.lastMessage;
        }
      });

      messageInput.value = "";
    });

    // Apply saved settings on load
    applySavedSettings();
  });