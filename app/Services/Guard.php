<?php

namespace App\Services;

class Guard extends \Illuminate\Auth\Guard
{
  function checkAccess ($level) {
      if ($this->guest()) {
          return false;
      }
      return ($this->user()->userType->level >= intval($level));
  }
}