<?php

namespace App\Command;

use App\Entity\Post;
use App\Command\DownloadFromJsonCommand;

class DownloadPostsCommand extends DownloadFromJsonCommand {
    // summon through php bin/console app:download-users
    protected static $defaultName = 'app:download-posts';

    // url with example data
    protected $url = "https://jsonplaceholder.typicode.com/posts";

    protected $entityClass = Post::class;
}