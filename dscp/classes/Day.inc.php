<?php

class Day {
    
    protected $name;
    protected $short;
    protected $numOfDishes;
    protected $isActive;
    protected $hasFixed;
    
    public function __construct($name, $short, $numOfDishes, $isActive, $hasFixed) {
        $this->name = $name;
        $this->short = $short;
        $this->numOfDishes = $numOfDishes;
        $this->isActive = $isActive;
        $this->hasFixed = $hasFixed;
    }
    
    public function __set($key, $value) {
        $this->key = $value;
    }
    
    public function __get($key) {
        return $this->$key;
    }
    
    public function __toString() {
        $string = "$this->name <br>$this->short <br>$this->numOfDishes <br>$this->isActive <br>";
        if (is_null($this->hasFixed)) {
            $string .= "nincs";
        } else {
            $string .= $this->hasFixed;
        }
        $string .= "<br>";
        return $string;
    }
    
}

?>