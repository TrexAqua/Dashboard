import React from 'react'
import { Table, DropdownButton, Button } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'


const Base = ({history}) => {
    const clickHandler = () => {
        history.push('/')
    }

    return (
        <div>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 >Simcord Automation Testing Tool - SAAT</h1>
                <h3>Base Table - Simpcord Test Automation</h3>
                Choose P/F<DropdownButton title='Reports on the Page:'>
                    <DropdownItem>Adhoc</DropdownItem>
                    <DropdownItem>Adhoc</DropdownItem>
                    <DropdownItem>Adhoc</DropdownItem>
                    <DropdownItem>Adhoc</DropdownItem>
                </DropdownButton>
        </div>
            <div>
            <Button onClick={clickHandler}>MainMenu</Button>
            <Button>Previous</Button>
            </div>    
    <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>SCNO</th>
      <th>SCDESC</th>
      <th>INPUT</th>
      <th>Expected Result</th>
      <th>Actual Result</th>
      <th>Passed/Failed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{Math.floor(Math.random() * 10)}</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aperiam?</td>
      <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet alias eaque soluta optio animi doloribus? Necessitatibus minus aliquam facere mollitia consectetur eligendi voluptatum tenetur architecto, dolorum, veniam repudiandae temporibus cumque? Illum doloribus dolore sed ut iste fugiat culpa, animi beatae alias fugit eligendi odio voluptatem, minus magni illo ex sunt.</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing.</td>
      <td>Adhoc</td>
      <td>Lorem, ipsum dolor.</td>
    </tr>
    <tr>
      <td>{Math.floor(Math.random() * 10)}</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aperiam?</td>
      <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet alias eaque soluta optio animi doloribus? Necessitatibus minus aliquam facere mollitia consectetur eligendi voluptatum tenetur architecto, dolorum, veniam repudiandae temporibus cumque? Illum doloribus dolore sed ut iste fugiat culpa, animi beatae alias fugit eligendi odio voluptatem, minus magni illo ex sunt.</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing.</td>
      <td>Adhoc</td>
      <td>Lorem, ipsum dolor.</td>
                    </tr>
                        <tr>
      <td>{Math.floor(Math.random() * 10)}</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aperiam?</td>
      <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet alias eaque soluta optio animi doloribus? Necessitatibus minus aliquam facere mollitia consectetur eligendi voluptatum tenetur architecto, dolorum, veniam repudiandae temporibus cumque? Illum doloribus dolore sed ut iste fugiat culpa, animi beatae alias fugit eligendi odio voluptatem, minus magni illo ex sunt.</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing.</td>
      <td>Adhoc</td>
      <td>Lorem, ipsum dolor.</td>
                    </tr>
                        <tr>
      <td>{Math.floor(Math.random() * 10)}</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aperiam?</td>
      <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet alias eaque soluta optio animi doloribus? Necessitatibus minus aliquam facere mollitia consectetur eligendi voluptatum tenetur architecto, dolorum, veniam repudiandae temporibus cumque? Illum doloribus dolore sed ut iste fugiat culpa, animi beatae alias fugit eligendi odio voluptatem, minus magni illo ex sunt.</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing.</td>
      <td>Adhoc</td>
      <td>Lorem, ipsum dolor.</td>
                    </tr>
                        <tr>
      <td>{Math.floor(Math.random() * 10)}</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aperiam?</td>
      <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet alias eaque soluta optio animi doloribus? Necessitatibus minus aliquam facere mollitia consectetur eligendi voluptatum tenetur architecto, dolorum, veniam repudiandae temporibus cumque? Illum doloribus dolore sed ut iste fugiat culpa, animi beatae alias fugit eligendi odio voluptatem, minus magni illo ex sunt.</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing.</td>
      <td>Adhoc</td>
      <td>Lorem, ipsum dolor.</td>
                    </tr>
                        <tr>
      <td>{Math.floor(Math.random() * 10)}</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aperiam?</td>
      <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet alias eaque soluta optio animi doloribus? Necessitatibus minus aliquam facere mollitia consectetur eligendi voluptatum tenetur architecto, dolorum, veniam repudiandae temporibus cumque? Illum doloribus dolore sed ut iste fugiat culpa, animi beatae alias fugit eligendi odio voluptatem, minus magni illo ex sunt.</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing.</td>
      <td>Adhoc</td>
      <td>Lorem, ipsum dolor.</td>
                    </tr>
                        <tr>
      <td>{Math.floor(Math.random() * 10)}</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aperiam?</td>
      <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet alias eaque soluta optio animi doloribus? Necessitatibus minus aliquam facere mollitia consectetur eligendi voluptatum tenetur architecto, dolorum, veniam repudiandae temporibus cumque? Illum doloribus dolore sed ut iste fugiat culpa, animi beatae alias fugit eligendi odio voluptatem, minus magni illo ex sunt.</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing.</td>
      <td>Adhoc</td>
      <td>Lorem, ipsum dolor.</td>
                    </tr>
                        <tr>
      <td>{Math.floor(Math.random() * 10)}</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aperiam?</td>
      <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet alias eaque soluta optio animi doloribus? Necessitatibus minus aliquam facere mollitia consectetur eligendi voluptatum tenetur architecto, dolorum, veniam repudiandae temporibus cumque? Illum doloribus dolore sed ut iste fugiat culpa, animi beatae alias fugit eligendi odio voluptatem, minus magni illo ex sunt.</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing.</td>
      <td>Adhoc</td>
      <td>Lorem, ipsum dolor.</td>
    </tr>
                    
    

  </tbody>
</Table>
        </div>
    )
}

export default Base
