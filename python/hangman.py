import tkinter as tk
from tkinter import messagebox
import random
import os

# Word list
words = ['space', 'moon', 'star', 'sun', 'planet', 'rocket','sattelit','isro','galaxy','earth','mercury','venus','mars','jupiter','saturn','uranus','neptune','milkyway','astroid','meteroid','dwarfstar']

class HangmanGame:
    def __init__(self, root):
        self.root = root
        self.root.title("Hangman Game")
        self.root.geometry("500x600")
        
        # Set the background color of the main window
        self.root.config(bg="lightblue")

        # Add a label for the game instructions
        self.instructions = tk.Label(self.root, text="The words you have to guess are related to our website. Good luck!", 
                                     font=("Helvetica", 14), bg="lightblue")
        self.instructions.pack(pady=10)

        self.word = random.choice(words)
        self.guesses = ''
        self.max_attempts = 6
        self.remaining_attempts = self.max_attempts

        # Path to the folder where images are stored
        self.image_folder = 'images'  # Update this to your folder path

        # Load and resize hangman images
        self.hangman_images = [self.load_image(f"hangman{i}.png") for i in range(7)]
        self.hangman_label = tk.Label(root, image=self.hangman_images[0], bg="lightblue")
        self.hangman_label.pack(pady=4)

        self.label_word = tk.Label(root, text="Guess the word: ", font=("Helvetica", 18), bg="lightblue")
        self.label_word.pack(pady=15)

        self.display_word = tk.Label(root, text=self.get_display_word(), font=("Helvetica", 24), bg="lightblue")
        self.display_word.pack(pady=20)

        self.label_attempts = tk.Label(root, text=f"Remaining Attempts: {self.remaining_attempts}", font=("Helvetica", 14), bg="lightblue")
        self.label_attempts.pack(pady=10)

        self.create_alphabet_buttons()

        self.button_frame = tk.Frame(root, bg="lightblue")
        self.button_frame.pack(pady=20)

        self.button_replay = tk.Button(self.button_frame, text="Replay", command=self.replay, font=("Helvetica", 14))
        self.button_replay.grid(row=0, column=0, padx=10)

        self.button_exit = tk.Button(self.button_frame, text="Exit", command=self.root.quit, font=("Helvetica", 14))
        self.button_exit.grid(row=0, column=1, padx=10)

    def load_image(self, filename):
        """Loads and resizes an image."""
        try:
            image_path = os.path.join(self.image_folder, filename)
            image = tk.PhotoImage(file=image_path).subsample(2, 2)
            return image
        except Exception as e:
            messagebox.showerror("Error", f"Unable to load image: {filename}\n{e}")
            return None

    def create_alphabet_buttons(self):
        self.alphabet_frame = tk.Frame(self.root, bg="lightblue")
        self.alphabet_frame.pack()

        alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        self.buttons = {}
        for i, letter in enumerate(alphabets):
            button = tk.Button(self.alphabet_frame, text=letter, width=3, height=2, font=("Helvetica", 12),
                               command=lambda letter=letter: self.check_letter(letter.lower()))
            button.grid(row=i // 6, column=i % 6, padx=5, pady=5)
            self.buttons[letter.lower()] = button

    def get_display_word(self):
        return ' '.join([letter if letter in self.guesses else '_' for letter in self.word])

    def check_letter(self, letter):
        if letter in self.guesses:
            return
        self.guesses += letter

        if letter not in self.word:
            self.remaining_attempts -= 1
            self.label_attempts.config(text=f"Remaining Attempts: {self.remaining_attempts}")
            self.hangman_label.config(image=self.hangman_images[self.max_attempts - self.remaining_attempts])

        self.display_word.config(text=self.get_display_word())

        self.buttons[letter].config(state="disabled")

        if all(letter in self.guesses for letter in self.word):
            self.end_game("You won!")

        if self.remaining_attempts == 0:
            self.end_game("You lost!")

    def end_game(self, message):
        messagebox.showinfo("Game Over", f"{message}\nThe word was: {self.word}")
        self.disable_all_buttons()

    def disable_all_buttons(self):
        for button in self.buttons.values():
            button.config(state="disabled")

    def replay(self):
        self.word = random.choice(words)
        self.guesses = ''
        self.remaining_attempts = self.max_attempts

        self.display_word.config(text=self.get_display_word())
        self.label_attempts.config(text=f"Remaining Attempts: {self.remaining_attempts}")
        self.hangman_label.config(image=self.hangman_images[0])

        for button in self.buttons.values():
            button.config(state="normal")


# Initialize the main window
root = tk.Tk()
game = HangmanGame(root)
root.mainloop()
