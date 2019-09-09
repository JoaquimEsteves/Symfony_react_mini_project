<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * User
 *
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @ORM\Table(name="USER")
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

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(?string $username): self
    {
        $this->username = $username;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getAddressStreet(): ?string
    {
        return $this->addressStreet;
    }

    public function setAddressStreet(?string $addressStreet): self
    {
        $this->addressStreet = $addressStreet;

        return $this;
    }

    public function getAddressSuite(): ?string
    {
        return $this->addressSuite;
    }

    public function setAddressSuite(?string $addressSuite): self
    {
        $this->addressSuite = $addressSuite;

        return $this;
    }

    public function getAddressCity(): ?string
    {
        return $this->addressCity;
    }

    public function setAddressCity(?string $addressCity): self
    {
        $this->addressCity = $addressCity;

        return $this;
    }

    public function getAddressZipcode(): ?string
    {
        return $this->addressZipcode;
    }

    public function setAddressZipcode(?string $addressZipcode): self
    {
        $this->addressZipcode = $addressZipcode;

        return $this;
    }

    public function getAddressGeoLat(): ?float
    {
        return $this->addressGeoLat;
    }

    public function setAddressGeoLat(?float $addressGeoLat): self
    {
        $this->addressGeoLat = $addressGeoLat;

        return $this;
    }

    public function getAddressGeoLng(): ?float
    {
        return $this->addressGeoLng;
    }

    public function setAddressGeoLng(?float $addressGeoLng): self
    {
        $this->addressGeoLng = $addressGeoLng;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getWebsite(): ?string
    {
        return $this->website;
    }

    public function setWebsite(?string $website): self
    {
        $this->website = $website;

        return $this;
    }

    public function getCompanyName(): ?string
    {
        return $this->companyName;
    }

    public function setCompanyName(?string $companyName): self
    {
        $this->companyName = $companyName;

        return $this;
    }

    public function getCompanyCatchPhrase(): ?string
    {
        return $this->companyCatchPhrase;
    }

    public function setCompanyCatchPhrase(?string $companyCatchPhrase): self
    {
        $this->companyCatchPhrase = $companyCatchPhrase;

        return $this;
    }

    public function getCompanyBs(): ?string
    {
        return $this->companyBs;
    }

    public function setCompanyBs(?string $companyBs): self
    {
        $this->companyBs = $companyBs;

        return $this;
    }

}
