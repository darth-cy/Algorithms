require 'byebug'

class RealQueens

  def initialize(length, num_of_queens)
    @currently_placing = 0
    @length = length
    @num_of_queens = num_of_queens
    @rows = Array.new(@length) {Array.new(@length) {"_"} }
    @all_coords = []
    fill_coords
  end

  def fill_coords
    (0..@length-1).each do |row_num|
      (0..@length-1).each do |col_num|
        @all_coords << [row_num, col_num]
      end
    end
    nil
  end

  def render
    @rows.each do |row|
      print_row = []
      row.each do |space|
        print_row << space
      end
      puts print_row.join (" ")
    end
    nil
  end

  def all_unavailable
    (all_unavailable_diags + unavailable_rows + unavailable_cols).uniq
  end

  def available
    @all_coords - all_unavailable
  end

  def []=(row, col, value)
    @rows[row][col] = value
  end

  def [](pos)
    row, col = pos
    @rows[row][col]
  end

  def place_queen
    #debugger
    return false if available.length == 0

    @currently_placing += 1

    if @currently_placing == @num_of_queens
      spot = available[0]
      self[spot[0], spot[1]] = :Q
      return true
    end

    available.each do |coord|
        self[coord[0], coord[1]] = :Q
        if !place_queen
          self[coord[0], coord[1]] = "_"
          next
        else
          return true
        end
    end

  end

  def check_row(row_num)
    @rows[row_num].include? (:Q)
  end

  def unavailable_rows
    unavailable_coordinates = []
    (0..@length-1).each do |row_idx|
      if check_row(row_idx)
        (0..@length-1).each { |col| unavailable_coordinates << [row_idx, col]}
      end
    end
    unavailable_coordinates.uniq
  end


  def check_col(col_num)
    @rows.transpose[col_num].include?(:Q)
  end

  def unavailable_cols
    unavailable_coordinates = []
    (0..@length-1).each do |col_idx|
      if check_col(col_idx)
        (0..@length-1).each { |row| unavailable_coordinates << [row, col_idx]}
      end
    end
    unavailable_coordinates.uniq
  end

  def up_right(row, col)
    diag = []
    until ! on_board?(row-1, col+1)
      diag << [row -= 1, col += 1]
    end
    diag
  end

  def up_left(row, col)
    diag = []
    until ! on_board?(row-1, col-1)
      diag << [row-=1, col-=1]
    end
    diag
  end

  def down_left(row, col)
    diag = []
    until ! on_board?(row+1, col-1)
      diag << [row += 1, col -= 1]
    end
    diag
  end

  def down_right(row, col)
    diag = []
    until ! on_board?(row+1, col+1)
      diag << [row += 1, col += 1]
    end
    diag
  end

  def all_unavailable_diags
    queen_coords = find_all_queens
    all_diags = []
    queen_coords.each do |coord|
      all_diags += unavailable_diags(coord[0], coord[1])
    end
    all_diags.uniq
  end

  def find_all_queens
    @all_coords.select {|coord| self[coord] == :Q}
  end


  def unavailable_diags(row, col)
    unavailable_diags = up_right(row, col) + down_right(row, col) + down_left(row, col) + up_left(row, col)
  end



  def on_board?(row, col)
    [row, col].all? {|num| num.between?(0, @length-1)}
  end


  def check_diag(row_num, col_num)
  end

end
