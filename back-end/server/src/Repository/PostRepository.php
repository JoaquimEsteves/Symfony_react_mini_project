<?php

namespace App\Repository;

use App\Entity\Post;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
/**
 * @method Post|null find($id, $lockMode = null, $lockVersion = null)
 * @method Post|null findOneBy(array $criteria, array $orderBy = null)
 * @method Post[]    findAll()
 * @method Post[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PostRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Post::class);
    }

    public function getPosts(int $user_id, int $offset) {
        return $this->createQueryBuilder('p')
            ->orderBy('p.id', 'ASC')
            ->andWhere('p.user_id = :user_id')
            ->setFirstResult($offset)
            ->setMaxResults(100)
            ->getQuery()
            ->execute();
    }
}
