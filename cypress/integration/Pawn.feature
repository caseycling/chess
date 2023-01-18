Feature: Testing out pawn movement capablitiies
    Scenario: Moving pawn from E2 to E4
        Given I am on the board
        When I select the E2 pawn
        And I then click on the E4 square
        Then the pawn will move to the E4 square