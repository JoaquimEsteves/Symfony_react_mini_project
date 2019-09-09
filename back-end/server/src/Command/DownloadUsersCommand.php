<?php

namespace App\Command;

use App\Entity\User;
use App\Command\DownloadFromJsonCommand;

class DownloadUsersCommand extends DownloadFromJsonCommand {
    // summon through php bin/console app:download-users
    protected static $defaultName = 'app:download-users';

    // url with example data
    protected $url = "https://jsonplaceholder.typicode.com/users";

    protected $entityClass = User::class;
}
