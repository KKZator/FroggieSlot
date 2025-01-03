import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { ConnectButtonz } from "./ConnectButton";
import Image from "next/image";


export default function RespNavbar() {
  const collapseItems = [
    {'Name': 'Home', 'link': '/'},
    {'Name': 'userCRUD', 'link': '/userCrud'},
    {'Name': "lotteryCRUD", 'link': '/lotteryCrud'},    
    {'Name': "ticketCRUD", 'link': '/ticketCrud'},    
    {'Name': "buyTicketCRUD", 'link': '/buyTicketCrud'},    
    {'Name': "isAliceCRUD", 'link': '/isAliveCrud'},    
    {'Name': "contractInteraction", 'link': '/cotractInteraction'},
    {'Name': "slot", 'link': '/slot'}          
  ];

  return (
    
      <Navbar isBordered variant="sticky" maxWidth='fluid'>
        <Navbar.Toggle showIn="xs" suppressHydrationWarning/>
          <Navbar.Brand>          
            {/* <Image src={'/img/logo-dinos-or.png'} width={100} height={40} alt='The Dinos Logo'/> */}   
          </Navbar.Brand>
          <Navbar.Content style={{color: '#F6903F'}} hideIn="xs">
          <Navbar.Link href='/' css={{fontWeight: '1000 !important'}}>Home</Navbar.Link> 
            <Navbar.Link href='/userCrud' css={{fontWeight: '1000 !important'}}>userCRUD</Navbar.Link> 
            <Navbar.Link href='/lotteryCrud' css={{fontWeight: '1000 !important'}}>lotteryCRUD</Navbar.Link>            
            <Navbar.Link href='/ticketCrud' css={{fontWeight: '1000 !important'}}>ticketCRUD</Navbar.Link>            
            <Navbar.Link href='/buyTicketCrud' css={{fontWeight: '1000 !important'}}>buyTicketCRUD</Navbar.Link>            
            <Navbar.Link href='/isAliveCrud' css={{fontWeight: '1000 !important'}}>isAliveCRUD</Navbar.Link>
            <Navbar.Link href='/cotractInteraction' css={{fontWeight: '1000 !important'}}>contractInteraction</Navbar.Link>
            <Navbar.Link href='/slot' css={{fontWeight: '1000 !important'}}>slot</Navbar.Link>
          </Navbar.Content>
          
          <Navbar.Content
            css={{
              "@m": {
              w: "12%",
              jc: "flex-end",
              },
            }}
          > 

          <Navbar.Item>
                <ConnectButtonz/>
          </Navbar.Item>
        </Navbar.Content>

        <Navbar.Collapse>
          {collapseItems.map((links) => (
            <Navbar.CollapseItem key={links.Name}>
              <Link                
                css={{
                  minWidth: "100%",
                  color: '#F6903F',
                  fontWeight: '1000 !important'
                  }}
                  href={links.link}
                >
                {links.Name}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
   
  );
}