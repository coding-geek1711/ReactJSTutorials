import DontBeLonely
import HappinessGenerator from Life


def myLife():
    status = input("Whats ur status?")
    if status == "Lonely":
        DontBeLonely()
        HappinessGenerator(name="Maheswaran")
        print("All systems functional. Keep going")


def main():
    myLife()


if __name__ == "__main__":
    main()
