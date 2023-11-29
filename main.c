#include <stdio.h>
#include <stdlib.h>
#include <time.h>

char board[9 + 1] = {'-', '-', '-', '-', '-', '-', '-', '-', '-'};
int isLegal(int move);
int hasWon(char player);
void displayBoard();

int main()
{
    int player, opponent, move, legal, won, very;
    char turn;

    srand(time(0));
    player = (rand() % 2) + 1; // randomly decide who plays first
    opponent = 3 - player;

    printf("Welcome to Tic Tac Toe!\n");
    printf("Player %d goes first\n", player);

    while (1)
    {
        if (player == 1)
        {
            turn = 'X';
        }
        else
        {
            turn = 'O';
        }

        displayBoard();
        printf("Player %d, make your move: ", player);
        scanf("%d", &move);

        if (!isLegal(move))
        {
            printf("Invalid move, try again\n");
            continue;
        }
        board[move - 1] = turn;
        legal = hasWon(turn);
        if (legal)
        {
            printf("Congratulations, Player %d wins!!\n", player);
            break;
        }
        player = opponent;
        opponent = 3 - player;

        // lógica para jogar contra o PC
        for (int count = 0; count < 9; count++)
        {
            if (player == 1)
            {
                turn = 'X';
            }
            else
            {
                turn = 'O';
            }
            very = (rand() % (9 - 0 + 1)) + 0;
            // verificamos todas as posiçóes vazias
            if (board[very] == '-')
            {
                board[very] = turn;
                // verificar se há um vencedor
                legal = hasWon(turn);
                if (legal)
                {
                    printf("Congratulations, Player %d wins!!\n", player);
                    break;
                }

                // definir jogador
                player = opponent;
                opponent = 3 - player;
                break;
            }
        }
    }

    return 0;
}

int isLegal(int move)
{
    if (move < 1 || move > 9)
    {
        return 0;
    }

    if (board[move - 1] != '-')
    {
        return 0;
    }

    return 1;
}

int hasWon(char player)
{
    int i;

    // check rows and columns for a win
    for (i = 0; i < 3; i++)
    {
        if (board[i] == player && board[i + 3] == player && board[i + 6] == player)
        {
            return 1;
        }

        if (board[i * 3] == player && board[i * 3 + 1] == player && board[i * 3 + 2] == player)
        {
            return 1;
        }
        
    }

    // check diagonals for a win
    if (board[0] == player && board[4] == player && board[8] == player)
    {
        return 1;
    }

    if (board[2] == player && board[4] == player && board[6] == player)
    {
        return 1;
    }

    return 0;
}

void displayBoard()
{
    int i;
    printf("\n");
    for (i = 0; i < 9; i++)
    {
        if (i % 3 == 0 && i != 0)
        {
            printf("\n");
        }
        printf("%c ", board[i]);
    }
    printf("\n\n");
}