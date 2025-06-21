<?php

class User {

    protected $username;
    protected $role;
    protected $pass;

    public function __construct($username, $role, $pass) {
        $this->username = $username;
        $this->role = $role;
        $this->pass = $pass;
    }

    public function __get($key) {
        return $this->$key;
    }

}

?>