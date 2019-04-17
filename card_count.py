from graphics import *
import itertools, random

NUM_DECKS = 6
total_cards = 0
total_dealt = 0
def create_deck():
    deck = []
    for i in range(NUM_DECKS):
        deck.extend(list(itertools.product(range(1,14),['S', 'H', 'D', 'C'])))
    return deck

def draw_card(w,card,suit):
    cardx = 30 * total_dealt
    card_path = "cards/PNG/" + str(card) + str(suit) + ".png"
    c = Image(Point(100,100),card_path)
    c.draw(w)

def switch(arg):
    switcher = {
        1: "A",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "J",
        12: "Q",
        13: "K"
        }
    return switcher.get(arg,"null")


def main():
    deck = create_deck()
    random.shuffle(deck)
    print(deck)
    random.shuffle(deck)
    print(deck)
    win = GraphWin("My Circle", 640, 480)
    win.setCoords(0,0,640,460)
    c = Circle(Point(50,50), 10)
    c.draw(win)
    print(switch(deck[total_cards][0]))
    draw_card(win,switch(deck[total_cards][0]),deck[total_cards][1])
    win.getMouse() # Pause to view result
    win.close()    # Close window when done


main()

