<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * User
 *
 * @ORM\Table(name="USER")
 * @ORM\Entity
 */
class User
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     */
    private $id;

    /**
     * @var string|null
     *
     * @ORM\Column(name="name", type="string", length=100, nullable=true)
     */
    private $name;

    /**
     * @var string|null
     *
     * @ORM\Column(name="username", type="string", length=100, nullable=true)
     */
    private $username;

    /**
     * @var string|null
     *
     * @ORM\Column(name="email", type="string", length=100, nullable=true)
     */
    private $email;

    /**
     * @var string|null
     *
     * @ORM\Column(name="address_street", type="string", length=100, nullable=true)
     */
    private $addressStreet;

    /**
     * @var string|null
     *
     * @ORM\Column(name="address_suite", type="string", length=100, nullable=true)
     */
    private $addressSuite;

    /**
     * @var string|null
     *
     * @ORM\Column(name="address_city", type="string", length=100, nullable=true)
     */
    private $addressCity;

    /**
     * @var string|null
     *
     * @ORM\Column(name="address_zipcode", type="string", length=100, nullable=true)
     */
    private $addressZipcode;

    /**
     * @var float|null
     *
     * @ORM\Column(name="address_geo_lat", type="float", precision=10, scale=0, nullable=true)
     */
    private $addressGeoLat;

    /**
     * @var float|null
     *
     * @ORM\Column(name="address_geo_lng", type="float", precision=10, scale=0, nullable=true)
     */
    private $addressGeoLng;

    /**
     * @var string|null
     *
     * @ORM\Column(name="phone", type="string", length=100, nullable=true)
     */
    private $phone;

    /**
     * @var string|null
     *
     * @ORM\Column(name="website", type="string", length=100, nullable=true)
     */
    private $website;

    /**
     * @var string|null
     *
     * @ORM\Column(name="company_name", type="string", length=100, nullable=true)
     */
    private $companyName;

    /**
     * @var string|null
     *
     * @ORM\Column(name="company_catch_phrase", type="string", length=100, nullable=true)
     */
    private $companyCatchPhrase;

    /**
     * @var string|null
     *
     * @ORM\Column(name="company_bs", type="string", length=100, nullable=true)
     */
    private $companyBs;

    public function __construct($userObject) {
        $this->id = $userObject->id;
        $this->name = $userObject->name;
        $this->username = $userObject->username;
        $this->email = $userObject->email;
        $this->addressStreet = $userObject->address->street;
        $this->addressSuite = $userObject->address->suite;
        $this->addressCity = $userObject->address->city;
        $this->addressZipcode = $userObject->address->zipcode;
        $this->addressGeoLat = $userObject->address->geo->lat;
        $this->addressGeoLng = $userObject->address->geo->lng;
        $this->phone = $userObject->phone;
        $this->website = $userObject->website;
        $this->companyName = $userObject->company->name;
        $this->companyCatchPhrase = $userObject->company->catchPhrase;
        $this->companyBs = $userObject->company->bs;
    }

}
