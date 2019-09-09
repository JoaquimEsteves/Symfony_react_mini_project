<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

use App\Repository\UserRepository;
use App\Entity\User;

class ApiController extends AbstractController
{

    /**
     * @Route("/api/users", name="users")
     * @return JsonResponse
     */
    public function usersAction(SerializerInterface $serializer)
    {
        $data = $this->getDoctrine()
            ->getRepository(User::class)
            ->getUsers();
        return new JsonResponse($serializer->serialize(
            $data,
            'json'
        ));
    }

    /**
     * @Route("/api/delete/user/{id}", name="deleteUser")
     */
    public function deleteUserAction($id)
    {
        // Input is automatically sanitized by the Doctrine
        $user = $this->getDoctrine()
            ->getEntityManager()
            ->getRepository(User::class)
            ->find($id);
        if (!$user) {
            return new JsonResponse("Could not find the user!");
        }
        if (!$user) {
            throw $this->createNotFoundException(
                'No user found for id '.$id
            );
        }
        // Delete later
        return new JsonResponse($product);
    }
}