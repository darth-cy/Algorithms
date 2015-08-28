class Board
  attr_accessor :n, :rows, :number_of_queens


  def initialize(n, number_of_queens)
    @n = n
    @rows = Array.new(n) {Array.new(n) {0} }
    @number_of_queens = number_of_queens
  end

  # def [](pos)
  #   row, col = pos
  #   @rows[row][col]
  # end
  #
  # def []=(*pos)
  #   row, col = pos
  #   @row[row][col] = value
  # end

  def place_queen
    k = @number_of_queens
    if @n % 2 == 0 && (@n-2)%6 != 0
      (1..@n/2).each do |i|
        @rows[i - 1][2*i - 1] = :q
        @rows[@n/2+i - 1][2*i-1 - 1] = :q
      end
      render
      puts '________________'
    end
  end

  def render
    @rows.each do |row|
      print_row = []
      row.each do |space|
        print_row << space
      end
      puts print_row.join(" ")
    end

  end



  # def place_queen
  #   available_spaces.each do |space|
  #
  #   end
  #
  # end
  #
  # def available_space
  #
  # end
  #
  # def


end

b = Board.new(10, 2)
b.place_queen
