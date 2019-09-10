<?php

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Doctrine\ORM\EntityManagerInterface;

abstract class DownloadFromJsonCommand extends Command
{
    // summon through php bin/console
    protected static $defaultName;

    // url with example data
    protected $url;

    // db connection
    private $entityManager;

    protected $entityClass;

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct();
        $this->entityManager = $entityManager;
    }

    protected function configure()
    {
        $this
            ->setDescription("Gets posts from {$this->url}")
            ->setHelp('Simply call this command to populate the database!');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        // Notice that there's no try-catch shenanigans!
        // If the transaction fails we want to see exactly why
        $output->writeln("Fetching data from {$this->url}");
        foreach(json_decode(file_get_contents($this->url)) as $object) {
            $this->entityManager->persist(new $this->entityClass($object));
        }
        $this->entityManager->flush();
        $output->writeln("Sweet! We're done");
    }
}