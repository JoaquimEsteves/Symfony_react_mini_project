<?php

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\User;

class DownloadUsersCommand extends Command
{
    // summon through php bin/console app:download-users
    protected static $defaultName = 'app:download-users';

    // url with example data
    protected $url = "https://jsonplaceholder.typicode.com/users";

    // db connection
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct();
        $this->entityManager = $entityManager;
    }

    protected function configure()
    {
        $this
        ->setDescription('Gets users from https://jsonplaceholder.typicode.com/users')
        ->setHelp('Simply call this command to populate the database!');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        // Notice that there's no try-catch shenanigans!
        // If the transaction fails we want to see exactly why
        foreach(json_decode(file_get_contents($this->url)) as $parsed_user) {
            $this->entityManager->persist(new User($parsed_user));
        }
        $this->entityManager->flush();
    }
}