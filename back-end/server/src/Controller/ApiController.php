<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\HttpFoundation\Request;

use App\Repository\UserRepository;
use App\Entity\User;
use App\Entity\Post;

class ApiController extends AbstractController
{

    /**
     * @Route("/api/users", name="users")
     * @return JsonResponse
     */
    public function usersAction(SerializerInterface $serializer)
    {
        $users = $this->getDoctrine()
            ->getRepository(User::class)
            ->getUsers();
        if (!$users) {
            return new JsonResponse("Could not find any users! Did you run the populate database commands?");
        }
        return new JsonResponse($serializer->serialize(
            $users,
            'json'
        ));
    }

    /**
     * @Route("/api/posts/{user_id}", name="getPosts")
     */
    public function getPostsAction(int $user_id, SerializerInterface $serializer)
    {
        // Input is automatically sanitized by the Doctrine
        $posts = $this->getDoctrine()
            ->getEntityManager()
            ->getRepository(Post::class)
            ->findBy(
                ['userId' => $user_id],
                ['id' => 'ASC']
            );
        if (!$posts) {
            return new JsonResponse("Could not find any posts! Did you run the populate database commands?");
        }
        return new JsonResponse($serializer->serialize(
            $posts,
            'json'
        ));
    }

    /**
     * @Route("/api/delete/post/{id}", name="deleteUser")
     */
    public function deletePostAction(int $id, EntityManagerInterface $entityManager)
    {
        // Input is automatically sanitized by the Doctrine
        $post = $this->getDoctrine()
            ->getEntityManager()
            ->getRepository(Post::class)
            ->find($id);
        
        if (!$post) {
            return new JsonResponse("Could not find the post!");
        }
        // Delete from the DataBase
        $entityManager->remove($post);
        $entityManager->flush();

        // Send a message to our friends over at jsonplaceholder!
        $client = new \GuzzleHttp\Client();
        $response = $client->request('DELETE', "https://jsonplaceholder.typicode.com/posts/{$id}");
        if($response->getStatusCode() != 200) {
            return new JsonResponse("Deleted from database, but our request to jsonplaceholder didn't work!");
        }
        return new JsonResponse("Goodbye post {$id}");
    }
}